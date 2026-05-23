import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { beforeEach, describe, expect, it } from 'vitest';

import { Select2HighlightPipe } from './select2-highlight.pipe';

describe('HighlightPipe', () => {
    let pipe: Select2HighlightPipe;

    const sanitizerMock = {
        bypassSecurityTrustHtml: (html: string) => html,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [Select2HighlightPipe, { provide: DomSanitizer, useValue: sanitizerMock }],
        });

        pipe = TestBed.inject(Select2HighlightPipe);
    });

    it('should create the pipe', () => {
        expect(pipe).toBeTruthy();
    });

    describe('Early returns (missing data or disabled)', () => {
        it('should return the original value if disabled is true', () => {
            const result = pipe.transform('Test text', 'test', true);
            expect(result).toBe('Test text');
        });

        it('should return the original value if the search string is empty', () => {
            const result = pipe.transform('Test text', '');
            expect(result).toBe('Test text');
        });

        it('should return the original value if the search string is null or undefined', () => {
            expect(pipe.transform('Test text', null as any)).toBe('Test text');
            expect(pipe.transform('Test text', undefined as any)).toBe('Test text');
        });

        it('should return an empty string if the value is null or undefined', () => {
            expect(pipe.transform(null as any, 'test')).toBe('');
            expect(pipe.transform(undefined as any, 'test')).toBe('');
        });
    });

    describe('Highlight logic', () => {
        it('should wrap the matched text with a span tag', () => {
            const result = pipe.transform('Hello world', 'world');
            expect(result).toBe('Hello <span class="select2-highlight-text">world</span>');
        });

        it('should be case-insensitive', () => {
            const result = pipe.transform('Angular is great', 'ANGULAR');
            expect(result).toBe('<span class="select2-highlight-text">Angular</span> is great');
        });

        it('should highlight all occurrences (global match)', () => {
            const result = pipe.transform('Test test TEST', 'test');
            expect(result).toBe(
                '<span class="select2-highlight-text">Test</span> ' +
                    '<span class="select2-highlight-text">test</span> <span class="select2-highlight-text">TEST</span>',
            );
        });

        it('should escape regex special characters to prevent errors', () => {
            // If we search for [Angular]*, the brackets and asterisk must be treated as literal text
            const result = pipe.transform('I love [Angular]*', '[Angular]*');
            expect(result).toBe('I love <span class="select2-highlight-text">[Angular]*</span>');
        });

        it('should handle partial highlighting within a word', () => {
            const result = pipe.transform('Internationalization', 'national');
            expect(result).toBe('Inter<span class="select2-highlight-text">national</span>ization');
        });
    });

    describe('Internationalization & Accents (i18n)', () => {
        it('should correctly highlight exact accented characters', () => {
            const result = pipe.transform("L'éléphant est là", 'élé');
            expect(result).toBe('L\'<span class="select2-highlight-text">élé</span>phant est là');
        });

        it('should correctly handle standard ligatures like œ', () => {
            const result = pipe.transform("C'est l'œuvre de sa vie", 'œu');
            expect(result).toBe('C\'est l\'<span class="select2-highlight-text">œu</span>vre de sa vie');
        });

        it('should correctly handle ligatures like oe', () => {
            const result = pipe.transform("C'est l'œuvre de sa vie", 'oeu');
            expect(result).toBe('C\'est l\'<span class="select2-highlight-text">œu</span>vre de sa vie');
        });

        it('should correctly handle non-Latin alphabets (e.g., Japanese)', () => {
            const result = pipe.transform('こんにちは世界', '世界');
            expect(result).toBe('こんにちは<span class="select2-highlight-text">世界</span>');
        });

        it('should be diacritic-insensitive (ignoring accents during search)', () => {
            const result = pipe.transform('La crêpe est bonne', 'crepe');
            expect(result).toBe('La <span class="select2-highlight-text">crêpe</span> est bonne');
        });

        it('should handle complex diacritic-insensitive highlights while preserving original text', () => {
            const result = pipe.transform('Un éléphant', 'ele');
            expect(result).toBe('Un <span class="select2-highlight-text">élé</span>phant');
        });

        it('should handle combining diacritical marks (decomposed form)', () => {
            // Using combining acute accent (U+0301) after 'e'
            const textWithCombining = 'cafe\u0301'; // café with combining accent
            const result = pipe.transform(textWithCombining, 'cafe');
            // The combining mark stays with the 'e' it modifies
            expect(result).toBe('<span class="select2-highlight-text">cafe\u0301</span>');
        });
    });

    describe('Unicode Extended & Rare Ligatures', () => {
        it('should correctly highlight exact rare ligatures', () => {
            const result = pipe.transform('A word with ꜩ inside', 'ꜩ');
            expect(result).toBe('A word with <span class="select2-highlight-text">ꜩ</span> inside');
        });

        it('should handle case-insensitivity for Croatian/Serbian digraph ǉ', () => {
            const result = pipe.transform('The word ǉubav', 'Ǉ');
            expect(result).toBe('The word <span class="select2-highlight-text">ǉ</span>ubav');
        });

        it('should handle case-insensitivity for Croatian/Serbian digraph lj', () => {
            const result = pipe.transform('The word ǉubav', 'lj');
            expect(result).toBe('The word <span class="select2-highlight-text">ǉ</span>ubav');
        });

        it('should handle case-insensitivity for historical ligatures like ꜻ', () => {
            const result = pipe.transform('Testing the ꜻ character', 'Ꜻ');
            expect(result).toBe('Testing the <span class="select2-highlight-text">ꜻ</span> character');
        });

        it('should handle case-insensitivity for historical ligatures like av', () => {
            const result = pipe.transform('Testing the ꜻ character', 'av');
            expect(result).toBe('Testing the <span class="select2-highlight-text">ꜻ</span> character');
        });

        it('should handle titlecase vs lowercase for digraphs', () => {
            const result = pipe.transform('The digraph ǉ is rare', 'ǈ');
            expect(result).toBe('The digraph <span class="select2-highlight-text">ǉ</span> is rare');
        });
    });

    describe('Cyrillic Support', () => {
        it('should match Cyrillic characters with accents', () => {
            const result = pipe.transform('Привет мир', 'привет');
            expect(result).toBe('<span class="select2-highlight-text">Привет</span> мир');
        });

        it('should match е with ё', () => {
            const result = pipe.transform('ёлка', 'елка');
            expect(result).toBe('<span class="select2-highlight-text">ёлка</span>');
        });

        it('should match Serbian ћ with т', () => {
            const result = pipe.transform('ћирилица', 'тирилица');
            expect(result).toBe('<span class="select2-highlight-text">ћирилица</span>');
        });

        it('should handle Kazakh қ with к', () => {
            const result = pipe.transform('Қазақстан', 'казакстан');
            expect(result).toBe('<span class="select2-highlight-text">Қазақстан</span>');
        });

        it('should be case-insensitive for Cyrillic', () => {
            const result = pipe.transform('МОСКВА', 'москва');
            expect(result).toBe('<span class="select2-highlight-text">МОСКВА</span>');
        });
    });

    describe('Greek Support', () => {
        it('should match Greek characters with accents', () => {
            const result = pipe.transform('Ελλάδα', 'ελλαδα');
            expect(result).toBe('<span class="select2-highlight-text">Ελλάδα</span>');
        });

        it('should match ά with α', () => {
            const result = pipe.transform('άνθρωπος', 'ανθρωπος');
            expect(result).toBe('<span class="select2-highlight-text">άνθρωπος</span>');
        });

        it('should match έ with ε', () => {
            const result = pipe.transform('Αθήνα', 'αθηνα');
            expect(result).toBe('<span class="select2-highlight-text">Αθήνα</span>');
        });

        it('should match ώ with ω', () => {
            const result = pipe.transform('ώρα', 'ωρα');
            expect(result).toBe('<span class="select2-highlight-text">ώρα</span>');
        });

        it('should match ancient Greek diacritics', () => {
            const result = pipe.transform('ἄνθρωπος', 'ανθρωπος');
            expect(result).toBe('<span class="select2-highlight-text">ἄνθρωπος</span>');
        });

        it('should be case-insensitive for Greek', () => {
            const result = pipe.transform('ΕΛΛΑΔΑ', 'ελλαδα');
            expect(result).toBe('<span class="select2-highlight-text">ΕΛΛΑΔΑ</span>');
        });

        it('should match final sigma with regular sigma', () => {
            const result = pipe.transform('λόγος', 'λογοσ');
            expect(result).toBe('<span class="select2-highlight-text">λόγος</span>');
        });
    });

    describe('Arabic Support', () => {
        it('should match Arabic characters', () => {
            const result = pipe.transform('مرحبا', 'مرحبا');
            expect(result).toBe('<span class="select2-highlight-text">مرحبا</span>');
        });

        it('should match alif variants', () => {
            const result = pipe.transform('أحمد', 'احمد');
            expect(result).toBe('<span class="select2-highlight-text">أحمد</span>');
        });

        it('should match آ with ا', () => {
            const result = pipe.transform('آمن', 'امن');
            expect(result).toBe('<span class="select2-highlight-text">آمن</span>');
        });

        it('should match ة with ت', () => {
            const result = pipe.transform('مدرسة', 'مدرست');
            expect(result).toBe('<span class="select2-highlight-text">مدرسة</span>');
        });

        it('should match Persian ک with Arabic ك', () => {
            const result = pipe.transform('کتاب', 'كتاب');
            expect(result).toBe('<span class="select2-highlight-text">کتاب</span>');
        });

        it('should be case-insensitive for Arabic', () => {
            const result = pipe.transform('العربية', 'العربية');
            expect(result).toBe('<span class="select2-highlight-text">العربية</span>');
        });

        it('should handle Arabic text with diacritics (harakat)', () => {
            const result = pipe.transform('السَّلام', 'السلام');
            expect(result).toBe('<span class="select2-highlight-text">السَّلام</span>');
        });
    });

    describe('Hebrew Support', () => {
        it('should match Hebrew characters', () => {
            const result = pipe.transform('שלום', 'שלום');
            expect(result).toBe('<span class="select2-highlight-text">שלום</span>');
        });

        it('should match final forms with regular forms (kaf)', () => {
            const result = pipe.transform('מלך', 'מלכ');
            expect(result).toBe('<span class="select2-highlight-text">מלך</span>');
        });

        it('should match final forms with regular forms (mem)', () => {
            const result = pipe.transform('ירושלים', 'ירושלימ');
            expect(result).toBe('<span class="select2-highlight-text">ירושלים</span>');
        });

        it('should match final forms with regular forms (nun)', () => {
            const result = pipe.transform('ירדן', 'ירדנ');
            expect(result).toBe('<span class="select2-highlight-text">ירדן</span>');
        });

        it('should match final forms with regular forms (pe)', () => {
            const result = pipe.transform('כף', 'כפ');
            expect(result).toBe('<span class="select2-highlight-text">כף</span>');
        });

        it('should match final forms with regular forms (tsadi)', () => {
            const result = pipe.transform('ארץ', 'ארצ');
            expect(result).toBe('<span class="select2-highlight-text">ארץ</span>');
        });

        it('should handle Hebrew text with niqqud (dagesh)', () => {
            const result = pipe.transform('בּית', 'בית');
            expect(result).toBe('<span class="select2-highlight-text">בּית</span>');
        });

        it('should handle Hebrew text with niqqud (vowel points)', () => {
            const result = pipe.transform('יִשְׂרָאֵל', 'ישראל');
            expect(result).toBe('<span class="select2-highlight-text">יִשְׂרָאֵל</span>');
        });
    });

    describe('Japanese Hiragana/Katakana Support', () => {
        it('should match hiragana with katakana', () => {
            const result = pipe.transform('こんにちは', 'コンニチハ');
            expect(result).toBe('<span class="select2-highlight-text">こんにちは</span>');
        });

        it('should match katakana with hiragana', () => {
            const result = pipe.transform('コンピュータ', 'こんぴゅーた');
            expect(result).toBe('<span class="select2-highlight-text">コンピュータ</span>');
        });

        it('should match small kana with normal kana (tsu)', () => {
            const result = pipe.transform('がっこう', 'かつこう');
            expect(result).toBe('<span class="select2-highlight-text">がっこう</span>');
        });

        it('should match small ya/yu/yo with normal ya/yu/yo', () => {
            const result = pipe.transform('きょう', 'きよう');
            expect(result).toBe('<span class="select2-highlight-text">きょう</span>');
        });

        it('should match small vowels with normal vowels', () => {
            const result = pipe.transform('ちぃさい', 'ちいさい');
            expect(result).toBe('<span class="select2-highlight-text">ちぃさい</span>');
        });

        it('should match dakuten variants (ka/ga)', () => {
            const result = pipe.transform('かがみ', 'かかみ');
            expect(result).toBe('<span class="select2-highlight-text">かがみ</span>');
        });

        it('should match handakuten variants (ha/ba/pa)', () => {
            const result = pipe.transform('はっぱ', 'はつは');
            expect(result).toBe('<span class="select2-highlight-text">はっぱ</span>');
        });

        it('should match combining dakuten (が with が)', () => {
            const result = pipe.transform('がき', 'がき');
            expect(result).toBe('<span class="select2-highlight-text">がき</span>');
        });

        it('should match combining handakuten (ぱ with ぱ)', () => {
            const result = pipe.transform('ぱん', 'ぱん');
            expect(result).toBe('<span class="select2-highlight-text">ぱん</span>');
        });

        it('should match vowels with combining dakuten (あ゙)', () => {
            const result = pipe.transform('あ゙い', 'あい');
            expect(result).toBe('<span class="select2-highlight-text">あ゙い</span>');
        });

        it('should match vu (ゔ) with u', () => {
            const result = pipe.transform('ゔぁいおりん', 'うぁいおりん');
            expect(result).toBe('<span class="select2-highlight-text">ゔぁいおりん</span>');
        });

        it('should match rare katakana with dakuten (ヷ with わ)', () => {
            const result = pipe.transform('ヷヸヹヺ', 'わゐゑを');
            expect(result).toBe('<span class="select2-highlight-text">ヷヸヹヺ</span>');
        });

        it('should match mixed hiragana and katakana in same text', () => {
            const result = pipe.transform('ひらがなとカタカナ', 'ヒラガナトかたかな');
            expect(result).toBe('<span class="select2-highlight-text">ひらがなとカタカナ</span>');
        });

        it('should handle partial matches with mixed scripts', () => {
            const result = pipe.transform('日本語のテスト', 'てすと');
            expect(result).toBe('日本語の<span class="select2-highlight-text">テスト</span>');
        });

        it('should match づ/ヅ with つ/ツ', () => {
            const result = pipe.transform('つづく', 'つつく');
            expect(result).toBe('<span class="select2-highlight-text">つづく</span>');
        });

        it('should match small wa (ゎ) with normal wa (わ)', () => {
            const result = pipe.transform('くゎし', 'くわし');
            expect(result).toBe('<span class="select2-highlight-text">くゎし</span>');
        });

        it('should preserve original text casing in highlights', () => {
            const result = pipe.transform('カタカナ', 'かたかな');
            expect(result).toBe('<span class="select2-highlight-text">カタカナ</span>');
        });

        it('should handle multiple occurrences of Japanese characters', () => {
            const result = pipe.transform('あいうえお あいうえお', 'アイウエオ');
            expect(result).toBe(
                '<span class="select2-highlight-text">あいうえお</span> ' +
                    '<span class="select2-highlight-text">あいうえお</span>',
            );
        });
    });
});
