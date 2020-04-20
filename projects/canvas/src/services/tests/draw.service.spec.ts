import {CanvasProperty, DrawService} from '@ng-web-apis/canvas';
import {of} from 'rxjs';

describe('DrawService', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const prop: CanvasProperty = {
        beforeHook: jasmine.createSpy('beforeHook'),
        afterHook: jasmine.createSpy('afterHook'),
    };

    it('calls hooks with context', () => {
        // @ts-ignore
        const service = new DrawService([prop], context, of(0));

        expect(prop.afterHook).toHaveBeenCalledWith(context);
        expect(prop.afterHook).toHaveBeenCalledWith(context);
    });
});