///<reference path="../../../node_modules/monaco-editor/monaco.d.ts" />
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MonacoEditorConfigService {
  initCode: string = '';
  constructor() {}

  public getCustomLangExtensionPoint(): monaco.languages.ILanguageExtensionPoint {
    const newLanguage: monaco.languages.ILanguageExtensionPoint = {
      id: 'CustomLang',
    };
    return newLanguage;
  }

  public getCustomLangTokenProviders(): any {
    return <any>{
      keywords: [
        'abstract',
        'continue',
        'for',
        'new',
        'switch',
        'assert',
        'goto',
        'do',
        'if',
        'private',
        'this',
        'break',
        'protected',
        'throw',
        'else',
        'public',
        'enum',
        'return',
        'catch',
        'try',
        'interface',
        'static',
        'class',
        'finally',
        'const',
        'super',
        'while',
        'true',
        'false',
      ],

      typeKeywords: [
        'boolean',
        'double',
        'byte',
        'int',
        'short',
        'char',
        'void',
        'long',
        'float',
      ],

      operators: [
        '=',
        '>',
        '<',
        '!',
        '~',
        '?',
        ':',
        '==',
        '<=',
        '>=',
        '!=',
        '&&',
        '||',
        '++',
        '--',
        '+',
        '-',
        '*',
        '/',
        '&',
        '|',
        '^',
        '%',
        '<<',
        '>>',
        '>>>',
        '+=',
        '-=',
        '*=',
        '/=',
        '&=',
        '|=',
        '^=',
        '%=',
        '<<=',
        '>>=',
        '>>>=',
      ],
      symbols: /[=><!~?:&|+\-*\/\^%]+/,
      escapes:
        /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

      tokenizer: {
        root: [
          [
            /[a-z_$][\w$]*/,
            {
              cases: {
                '@typeKeywords': 'keyword',
                '@keywords': 'keyword',
                '@default': 'identifier',
              },
            },
          ],
          [/[A-Z][\w\$]*/, 'type.identifier'],
          { include: '@whitespace' },
          [/[{}()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],
          [
            /@symbols/,
            {
              cases: {
                '@operators': 'operator',
                '@default': '',
              },
            },
          ],
          [
            /@\s*[a-zA-Z_\$][\w\$]*/,
            { token: 'annotation', log: 'annotation token: $0' },
          ],
          [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
          [/0[xX][0-9a-fA-F]+/, 'number.hex'],
          [/\d+/, 'number'],
          [/[;,.]/, 'delimiter'],
          [/"([^"\\]|\\.)*$/, 'string.invalid'],
          [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
          [/'[^\\']'/, 'string'],
          [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
          [/'/, 'string.invalid'],
        ],
        comment: [
          [/[^\/*]+/, 'comment'],
          [/\/\*/, 'comment', '@push'], // nested comment
          ['\\*/', 'comment', '@pop'],
          [/[\/*]/, 'comment'],
        ],

        string: [
          [/[^\\"]+/, 'string'],
          [/@escapes/, 'string.escape'],
          [/\\./, 'string.escape.invalid'],
          [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }],
        ],

        whitespace: [
          [/[ \t\r\n]+/, 'white'],
          [/\/\*/, 'comment', '@comment'],
          [/\/\/.*$/, 'comment'],
        ],
      },
    };
  }

  // get the Color coding theme object for CustomLang language
  public getCustomLangTheme(): monaco.editor.IStandaloneThemeData {
    return {
      base: 'vs',
      inherit: false,
      rules: [
        { token: 'comment', foreground: '3f7f5f' },
        { token: 'string', foreground: '2A00FF' },
        { token: 'keyword', foreground: '7F0055' },
        { token: 'STATEMENTS', foreground: '7F0055' },
        { token: 'CONSTANTS', foreground: '7F0055' },
        { token: 'TYPES', foreground: 'cd3a3a' },
        { token: 'operator', foreground: '000000' },
        { token: 'identifier', foreground: '000000' },
        { token: '@brackets', foreground: '000000' },
        { token: 'annotation', foreground: 'B22222' },
      ],
      colors: {},
    };
  }
}
