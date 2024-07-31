import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { activities } from '@/data/guild/activities';
import { cn } from '@/lib/utils';

export function Activities() {
    return (
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            {activities.map(({ name, icon, description }) => (
                <Card key={name}>
                    <CardHeader>
                        <icon.svg className={cn('size-12 mx-auto mb-4', icon.className)} />
                        <CardTitle>{name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="muted">{description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
