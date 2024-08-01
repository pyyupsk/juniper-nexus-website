import { Fragment } from 'react';
import { Overview } from './components/overview';
import { QuickLinks } from './components/quick-links';
import { RecentActivity } from './components/recent-activity';

export default function Page() {
    return (
        <Fragment>
            <Overview />
            <RecentActivity />
            <QuickLinks />
        </Fragment>
    );
}
