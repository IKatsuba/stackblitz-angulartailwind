import { ChangeDetectionStrategy, Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  standalone: true,
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="rounded-2xl bg-gray-800 px-8 py-10 m-20">
      <img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src="https://github.com/IKatsuba.png?size=500" alt="">
      <div class="text-center">
        <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">Igor Katsuba</h3>
        <p class="text-sm leading-6 text-gray-400">Angular Researcher</p>
      </div>
      <ul role="list" class="mt-6 flex justify-center gap-x-6">
        <li>
          <a href="https://twitter.com/katsuba_igor" class="text-gray-400 hover:text-gray-300" target="_blank">
            <span class="sr-only">X</span>
            <svg class="h-8 w-8 text-gray-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path fill="currentColor" d="M17.53 3H21l-7.19 8.21L22 21h-6.25l-5-6.13L4.47 21H1l7.57-8.65L2 3h6.38l4.38 5.38L17.53 3Zm-1.06 15h1.67l-5.37-6.61-1.34-1.65L5.5 5h-1.7l5.47 6.74 1.34 1.65L16.47 18Z"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/IKatsuba" target="_blank" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Github</span>
            <svg class="h-8 w-8 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </a>
        </li>
        <li>
          <a href="https://t.me/Katsuba" class="text-gray-400 hover:text-gray-300">
            <span class="sr-only">Telegram</span>
            <svg class="h-8 w-8 text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" /></svg>
          </a>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {}

bootstrapApplication(AppComponent);
