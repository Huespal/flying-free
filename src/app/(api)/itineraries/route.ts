export const dynamic = 'force-static';
import itineraries from './itineraries.json';

export async function GET() {
  return Response.json(itineraries);
}