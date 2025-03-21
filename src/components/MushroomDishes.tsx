import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type DishVideo = {
  id: string;
  title: string;
  videoSrc: string;
  thumbnailSrc: string;
};

const mushroomDishes: DishVideo[] = [
  {
    id: '1',
    title: 'Mushroom Risotto',
    videoSrc: 'https://static.videezy.com/system/resources/previews/000/044/489/original/MM13_01.mp4',
    thumbnailSrc: 'https://i.pinimg.com/736x/77/4d/88/774d88f4295676295b483c4c2bc6562c.jpg',
  },
  {
    id: '2',
    title: 'Creamy Garlic Butter Tuscan',
    videoSrc: 'https://static.videezy.com/system/resources/previews/000/044/485/original/MM12_7.mp4',
    thumbnailSrc: 'https://i.pinimg.com/736x/31/5c/76/315c7652c9e8bd5130676d8a025b87e6.jpg',
  },
  {
    id: '3',
    title: 'Sauteed Mushrooms with Spinach',
    videoSrc: 'https://static.videezy.com/system/resources/previews/000/044/463/original/MM12_3.mp4',
    thumbnailSrc: 'https://i.pinimg.com/736x/81/59/26/8159268a32830f57422fe7ba3aed3e1f.jpg',
  },
  {
    id: '4',
    title: 'Bok Choy and Mushroom Stir Fry',
    videoSrc: 'https://static.videezy.com/system/resources/previews/000/044/394/original/MM9_1.mp4',
    thumbnailSrc: 'https://i.pinimg.com/736x/46/40/1b/46401b1150d871c6878668df4c2f8321.jpg',
  }
];

const MushroomDishes: React.FC = () => {
  return (
    <section className="py-24 bg-luxe-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-xs tracking-widest uppercase text-luxe-gold mb-2 block">
            Culinary Inspiration
          </span>
          <h2 className="font-light text-3xl md:text-4xl lg:text-5xl mb-6 text-luxe-green">
            Exquisite Dishes from Our Mushrooms
          </h2>
          <p className="max-w-2xl mx-auto text-luxe-green/80">
            Discover the culinary versatility of our premium mushrooms with these chef-crafted recipes that highlight their unique flavors and textures.
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-2 md:-ml-4">
            {mushroomDishes.map((dish) => (
              <CarouselItem key={dish.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-luxe-black/5 shadow-lg">
                  <video 
                    className="w-full h-full object-cover"
                    poster={dish.thumbnailSrc}
                    loop
                    muted
                    playsInline
                    onMouseOver={(e) => e.currentTarget.play()}
                    onMouseOut={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={dish.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-luxe-black/80 to-transparent p-4">
                    <h3 className="text-luxe-white font-light text-lg">{dish.title}</h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-luxe-green text-luxe-white border-none hover:bg-luxe-green/90" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-luxe-green text-luxe-white border-none hover:bg-luxe-green/90" />
        </Carousel>
      </div>
    </section>
  );
};

export default MushroomDishes;
