import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card';
import Gallery, { GalleryProps } from './gallery';
import { Button } from './button';
import { CabinProps } from '@/app/types';
import Book from './book';
import CabinContextProvider from '@/contexts/cabin-context';

export default function Cabin({
  id,
  name,
  description,
  images,
}: CabinProps & { images: GalleryProps['images'] }) {
  return (
    <CabinContextProvider>
      <Card className={'lg:w-[500px] sm:w-[100%] sm:mx-5'}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardContent>
            <Gallery images={images} />
          </CardContent>
        </CardHeader>
        <CardFooter>
          <Book id={id} name={name} description={description} images={images}>
            <Button>Book</Button>
          </Book>
        </CardFooter>
      </Card>
    </CabinContextProvider>
  );
}