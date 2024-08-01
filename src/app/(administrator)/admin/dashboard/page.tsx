import { Fragment } from 'react';
import { Overview } from './components/overview';
import { QuickLinks } from './components/quick-links';
import { RecentActivity } from './components/recent-activity';

export default function Page() {
    return (
        <Fragment>
            <h2>ภาพรวม</h2>
            <Overview />
            <RecentActivity />
            <QuickLinks />
        </Fragment>
    );
}
