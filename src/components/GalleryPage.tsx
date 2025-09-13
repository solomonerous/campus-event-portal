import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Filter, Image as ImageIcon, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface GalleryImage {
  id: number;
  title: string;
  year: string;
  category: string;
  url: string;
  description: string;
}

export function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [yearFilter, setYearFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    // Use embedded data
    const mockData = {
      images: [
        {
          id: 1,
          title: "TechFest 2024",
          year: "2023-24",
          category: "academic",
          url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
          description: "Technology exhibition with many innovative projects"
        },
        {
          id: 2,
          title: "Opening Ceremony 2024",
          year: "2023-24",
          category: "cultural",
          url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
          description: "New academic year opening ceremony"
        },
        {
          id: 3,
          title: "Football Tournament 2024",
          year: "2023-24",
          category: "sports",
          url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
          description: "Inter-faculty football tournament final"
        },
        {
          id: 4,
          title: "AI Workshop",
          year: "2024-25",
          category: "academic",
          url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
          description: "Artificial intelligence workshop"
        },
        {
          id: 5,
          title: "Cultural Festival 2024",
          year: "2023-24",
          category: "cultural",
          url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
          description: "Year-end cultural program"
        },
        {
          id: 6,
          title: "Career Fair",
          year: "2024-25",
          category: "academic",
          url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
          description: "Career fair with many participating businesses"
        }
      ]
    };
    
    setImages(mockData.images);
    setFilteredImages(mockData.images);
  }, []);

  useEffect(() => {
    // Apply filters
    let filtered = [...images];

    if (yearFilter !== 'all') {
      filtered = filtered.filter(image => image.year === yearFilter);
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(image => image.category === categoryFilter);
    }

    setFilteredImages(filtered);
  }, [images, yearFilter, categoryFilter]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'cultural': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'sports': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'academic': return 'Academic';
      case 'cultural': return 'Cultural';
      case 'sports': return 'Sports';
      default: return category;
    }
  };

  const getUniqueYears = () => {
    const years = [...new Set(images.map(img => img.year))];
    return years.sort().reverse();
  };

  const getImagesByCategory = (category: string) => {
    return filteredImages.filter(img => img.category === category);
  };

  const ImageCard = ({ image }: { image: GalleryImage }) => (
    <Dialog>
      <DialogTrigger asChild>
        <div className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="relative h-48 overflow-hidden">
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            <Badge className={`absolute top-2 left-2 ${getCategoryColor(image.category)}`}>
              {getCategoryLabel(image.category)}
            </Badge>
            <Badge variant="secondary" className="absolute top-2 right-2">
              {image.year}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold line-clamp-1 mb-1">{image.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>{image.title}</DialogTitle>
          <DialogDescription className="flex items-center space-x-4">
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {image.year}
            </span>
            <Badge className={getCategoryColor(image.category)}>
              {getCategoryLabel(image.category)}
            </Badge>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative max-h-[60vh] overflow-hidden rounded-lg">
            <ImageWithFallback
              src={image.url}
              alt={image.title}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-muted-foreground">{image.description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore memorable moments from events held at the university. 
            From academic to cultural and sports activities.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {getUniqueYears().map(year => (
                  <SelectItem key={year} value={year}>{year}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="academic">Academic</SelectItem>
                <SelectItem value="cultural">Cultural</SelectItem>
                <SelectItem value="sports">Sports</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1" />

          <div className="text-sm text-muted-foreground flex items-center">
            <ImageIcon className="h-4 w-4 mr-1" />
            {filteredImages.length} images
          </div>
        </div>

        {/* Gallery Tabs */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-600 mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Images Found</h3>
                <p className="text-muted-foreground">
                  No images match the current filters.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="academic" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getImagesByCategory('academic').map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cultural" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getImagesByCategory('cultural').map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {getImagesByCategory('sports').map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Gallery Stats */}
        <section className="mt-16 p-8 bg-muted/30 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-8">Gallery Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {images.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Images</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {getUniqueYears().length}
              </div>
              <div className="text-sm text-muted-foreground">Academic Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {getImagesByCategory('academic').length}
              </div>
              <div className="text-sm text-muted-foreground">Academic Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {getImagesByCategory('cultural').length + getImagesByCategory('sports').length}
              </div>
              <div className="text-sm text-muted-foreground">Cultural & Sports</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Share Your Moments</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Do you have beautiful photos from university events? Share them with us 
            to add to our community's photo gallery.
          </p>
          <Button size="lg">
            Contact to Share Photos
          </Button>
        </section>
      </div>
    </div>
  );
}