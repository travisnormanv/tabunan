'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Gallery from './gallery';
import { Button } from './button';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CabinProps, GalleryProps } from '@/app/types';

export default function Cabin({
  id,
  name,
  description,
  images,
}: CabinProps & GalleryProps) {
  const router = useRouter();

  return (
    <Card className={'lg:w-[500px] sm:w-[100%] sm:mx-5'}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardContent>
          <Gallery images={images} />
        </CardContent>
      </CardHeader>
      <CardFooter>
        <Button onClick={() => router.push(`/booking/${id}`)}>Book</Button>
      </CardFooter>
    </Card>
  );
}
