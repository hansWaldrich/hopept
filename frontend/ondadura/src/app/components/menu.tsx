import Link from 'next/link';
import React from 'react';

const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Ajuda', href: '/ajuda' },
    { label: 'Voluntários', href: '/voluntarios' },
    { label: 'Contatos', href: '/contatos' },
    { label: 'Sobre', href: '/sobre' },
];

const Menu: React.FC = () => (
    <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '1rem' }}>
            {menuItems.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                </li>
            ))}
        </ul>
    </nav>
);

export default Menu;