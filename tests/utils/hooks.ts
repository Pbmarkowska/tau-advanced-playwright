
import { Page } from '@playwright/test';
import { buildUrl } from './uiUrlBuilder';
import BookPage from '../ui/pages/book-page';
import LoginPage from '../ui/pages/login-page';
import ProfilePage from '../ui/pages/profile-page';

type PageObjectConstructor<T> = new (page: Page) => T;


async function beforeEach<T>(
  page: Page,
  PageObjectParam: PageObjectConstructor<T>,
  targetPage: string,
  params?: Record<any, any>
) {
  await page.goto(buildUrl(targetPage, params));
  const pageObject = new PageObjectParam(page);
  return pageObject;
}

export default { beforeEach };
