import { Fragment } from 'react';
import { Overview } from './components/overview';
import { QuickLinks } from './components/quick-links';
import { RecentActivity } from './components/recent-activity';

export default function Page() {
    return (
        <Fragment>
            <h3>ภาพรวม</h3>
            <Overview />
            <RecentActivity limit={5} />
            <QuickLinks />
        </Fragment>
    );
}
