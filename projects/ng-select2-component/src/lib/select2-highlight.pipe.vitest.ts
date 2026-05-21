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
});
