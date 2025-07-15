import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

// just redirect to /new
export const load: LayoutServerLoad = () => {
  throw redirect(307, '/new');
};
