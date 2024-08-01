import { buttonVariants } from '@/components/ui/button';
import { contacts } from '@/data/contacts';
import Link from 'next/link';

export function ContactsCard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {contacts.map((contact) => (
                <div
                    key={contact.title}
                    className="bg-gradient-to-br flex flex-col justify-between from-primary to-primary/50 text-primary-foreground p-6 rounded-lg shadow-sm"
                >
                    <div>
                        <contact.icon className="size-12 mb-4" />
                        <h3>{contact.title}</h3>
                    </div>
                    <div>
                        <p className="font-medium">{contact.description}</p>
                        <Link
                            href={contact.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={buttonVariants({
                                variant: 'secondary',
                                className: 'w-full lg:w-auto mt-4',
                            })}
                        >
                            <span className="hidden lg:inline">{contact.link.label}</span>
                            <span className="inline lg:hidden">{contact.name}</span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
