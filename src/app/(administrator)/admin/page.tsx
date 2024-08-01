import { Fragment } from 'react';
import { Overview } from '../components/dashboard/overview';
import { QuickLinks } from '../components/dashboard/quick-links';
import { RecentActivity } from '../components/dashboard/recent-activity';

export default function Page() {
    return (
        <Fragment>
            <Overview />
            <RecentActivity />
            <QuickLinks />
        </Fragment>
    );
}
