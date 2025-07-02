import Image from 'next/image';
import type { MenuItem } from '@/lib/menu-data';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  item: MenuItem;
}

export function ProductCard({ item }: ProductCardProps) {
  const hasVariants = item.variants && item.variants.length > 0;

  return (
    <Card className="w-full overflow-hidden border-2 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 flex-shrink-0 p-4">
           <Image
            src={item.image}
            alt={item.name}
            width={128}
            height={128}
            data-ai-hint={item.dataAiHint}
            className="rounded-full aspect-square object-cover mx-auto shadow-md border-4 border-card"
          />
        </div>
        <div className="flex flex-col flex-grow p-4 sm:pl-0 sm:w-2/3">
          <CardHeader className="p-0">
            <div className="flex justify-between items-start">
              <CardTitle className="font-headline text-2xl">{item.name}</CardTitle>
              {!hasVariants && item.price > 0 && (
                <div className="text-2xl font-bold text-primary font-headline whitespace-nowrap">
                  Bs. {item.price}
                </div>
              )}
            </div>
             <CardDescription className="text-xs uppercase tracking-wider text-muted-foreground pt-1">{item.subCategory}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-2 flex-grow">
            <p className="text-muted-foreground">{item.description}</p>
          </CardContent>
          {hasVariants && (
             <CardFooter className="p-0 mt-2 flex flex-col items-start gap-1">
              {item.variants?.map((variant, index) => (
                <div key={index} className="flex justify-between w-full text-sm">
                  <span>{variant.name}</span>
                  <span className="font-bold text-primary/90">Bs. {variant.price}</span>
                </div>
              ))}
            </CardFooter>
          )}
        </div>
      </div>
    </Card>
  );
}
