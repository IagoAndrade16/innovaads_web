/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JsObject } from '$lib/types/JsObject';
import { v4 as uuidV4 } from 'uuid'; 

class Utils {
	public static clean(value: string): string {
		if (typeof value !== 'string') return value;

		return value
			.replaceAll(' ', '')
			.replaceAll('-', '')
			.replaceAll('.', '')
			.replaceAll('/', '')
			.replaceAll('\\', '')
			.replaceAll('(', '')
			.replaceAll(')', '');
	}

	public static applyMask(mask: string, value: string, maxLength?: number) {
		const maxLengthOfValue = (maxLength ?? mask.length);
		let valueIfOverflowMaskLength: string | null = null;

		if (value.length > maxLengthOfValue) {
			valueIfOverflowMaskLength = value.slice(0, -1);
		}

		const cleanedValue = Utils.clean(valueIfOverflowMaskLength ?? value);

		const numChar = '0';
		const alphaChar = 'a';
		const alphaNumChars = ['[a0]', '[0a]'];
		const allChar = '*';

		let res = '';
		let charCounter = 0;
		for (let i = 0; i < mask.length; i++) {
			if (charCounter >= cleanedValue.length) break;

			if (mask[i] === numChar) {
				if (Utils.isNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
				charCounter++;
			} else if (mask[i] === alphaChar) {
				if (Utils.isAlphabetic(cleanedValue[charCounter])) res += cleanedValue[charCounter];
				charCounter++;
			} else if (mask[i] === '[') {
				const endingIndex = mask.indexOf(']', i);
				const multiChar = mask.substring(i, endingIndex + 1);

				if (alphaNumChars.includes(multiChar)) {
					if (Utils.isAlphaNumeric(cleanedValue[charCounter])) res += cleanedValue[charCounter];
					charCounter++;
					i += multiChar.length - 1;
				}
			} else if (mask[i] === allChar) {
				res += cleanedValue[charCounter];
				charCounter++;
			} else {
				res += mask[i];
			}
		}

		return res;
	}

	public static isNumeric(str: string) {
		return /^\d+$/.test(str);
	}

	static isInt(value: any): boolean {
		 
		return !Number.isNaN(value) && (function (x) { return (x | 0) === x; }(parseFloat(value)));
	}

	public static isAlphabetic(str: string) {
		return str.match('^[a-zA-Z]+$');
	}

	public static isAlphaNumeric(str: string) {
		const alphanumeric = /^[\p{L}\p{N}]*$/u;
		return str.match(alphanumeric);
	}

  public static genUuid(short = false): string {
		const uuid = uuidV4();
		return short ? uuid.substring(0, 12) : uuid;
	}

	public static buildQueryParams<T extends JsObject>(params: T): string {
		if (!params || Object.keys(params).length === 0) return '';

		return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
	}
}

export type IteratorCallback = (i: number) => any;
export default Utils;
