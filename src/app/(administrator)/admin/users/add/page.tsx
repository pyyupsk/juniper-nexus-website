import { search } from '@/actions/discord/members';
import { Panel } from './components/panel';

export default async function Page() {
    const members = await search();

    if (!members) return <div>Something went wrong</div>;

    return <Panel members={members} />;
}
