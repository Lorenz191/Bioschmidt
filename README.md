# Bioschmidt-Website

## Overview
Bioschmidt-Website is the official website for Bioschmidt, an organic farming business located in Nickelsdorf, Austria. The website showcases the farm's organic products, certifications, and provides contact information for potential customers and partners.

## About Bioschmidt
Bioschmidt is an organic farm operated by Gernot Schmidt in Nickelsdorf, Burgenland, Austria. The farm is certified by:
- Naturland (Member #992015)
- Erde & Saat (Member #ES-0885)

The farm produces a variety of organic products including:
- Lentils, beans, wheat
- Starch corn, buckwheat
- Phacelia, flaxseed, camelina
- Mustard, spelt, rye
- Durum wheat, sainfoin, alfalfa, and more

Bioschmidt is also a member and producer for Saatbau Linz, specializing in baking seeds and seed propagation.

## Website Features
The website includes the following sections:
- **Home Page**: Welcome section with the farm's logo and introduction
- **About Us**: Information about the farm, certifications, and products
- **Photo Gallery**: Images showcasing the farm and its operations
- **Contact**: Address and contact information

## Technical Details
The website is built using:
- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Deployment**: Docker containerization for easy deployment

## Development Setup
To set up the development environment:

1. Clone the repository:
```
git clone https://github.com/your-username/Bioschmidt-Website.git
cd Bioschmidt-Website
```

2. Install dependencies:
```
cd Bioschmidt/webapp
npm install
```

3. Run the development server:
```
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Docker Deployment
The website can be deployed using Docker:

1. Build the Docker image:
```
cd Bioschmidt/webapp
docker build -t bioschmidt-website .
```

2. Run the container:
```
docker run -p 3000:3000 bioschmidt-website
```

## Contact
For more information about Bioschmidt:
- **Address**: Untere Hauptstraße 76, 2425 Nickelsdorf, Burgenland, Austria
- **Phone**: +43 664 2280760
- **Email**: info@bioschmidt.at
- **Website**: www.bioschmidt.at
