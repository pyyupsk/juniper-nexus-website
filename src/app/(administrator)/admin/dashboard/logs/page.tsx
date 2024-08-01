import { Fragment } from 'react';
import { RecentActivity } from '../components/recent-activity';

export default function Page() {
    return (
        <Fragment>
            <h3>กิจกรรมทั้งหมดที่ผ่านมาใน 3 เดือน</h3>
            <RecentActivity />
        </Fragment>
    );
}
