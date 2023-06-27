"use client"

import { useRouter } from 'next/router';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';
import React from 'react';
import Link from 'next/link';

export default function PaginationButtons() {
  const router = useRouter();
  const { query } = router;
  const searchTerm = query.searchTerm;
  const startIndex = +query.start || 1;

  return (
    <div>
      {startIndex >= 10 && (
        <Link href="/">
          <div>
            <BiChevronLeftCircle />
          </div>
        </Link>
      )}
    </div>
  );
}
