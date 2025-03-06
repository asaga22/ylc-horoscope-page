"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  homeLabel?: string;
  separator?: React.ReactNode;
  className?: string;
  transformLabel?: (label: string) => string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  homeLabel = 'Home',
  separator = '/',
  className = '',
  transformLabel = (label) => 
    label
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase())
}) => {
  const pathname = usePathname();
  
  // Convert pathname to breadcrumb items
  const createBreadcrumbs = (): BreadcrumbItem[] => {
    const pathParts = pathname.split('/').filter(Boolean);
    
    // Always start with home
    const breadcrumbs: BreadcrumbItem[] = [{ 
      label: homeLabel, 
      href: '/' 
    }];

    // Build cumulative paths
    pathParts.reduce((accPath, part) => {
      const href = `${accPath}/${part}`;
      breadcrumbs.push({
        label: transformLabel(part),
        href
      });
      return href;
    }, '');

    // Mark last item as non-linkable
    breadcrumbs[breadcrumbs.length - 1].href = undefined;

    return breadcrumbs;
  };

  const breadcrumbs = createBreadcrumbs();

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`padded-wrapper text-sm text-gray-600 ${className}`}
    >
      <ol className="flex items-center space-x-2">
        {breadcrumbs.map((item, index) => (
          <li 
            key={item.href || index} 
            className="flex items-center"
          >
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500 font-semibold">
                {item.label}
              </span>
            )}
            
            {index < breadcrumbs.length - 1 && (
              <span className="mx-2 text-gray-400">
                {separator}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;