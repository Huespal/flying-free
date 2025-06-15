export const dynamic = 'force-static';
import locations from './locations.json';

export async function GET() {
  return Response.json(locations);
}