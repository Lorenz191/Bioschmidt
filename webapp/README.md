# Bioschmidt Website - Web Application

## Overview
This is the web application for Bioschmidt, an organic farming business located in Nickelsdorf, Austria. The website showcases the farm's organic products, certifications, and provides contact information for potential customers and partners.

## Features
The website includes the following sections:
- **Home Page**: Welcome section with the farm's logo and introduction
- **About Us**: Information about the farm, certifications, and products
- **Photo Gallery**: Images showcasing the farm and its operations
- **Contact**: Address and contact information

## Technical Stack
- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: Tailwind CSS
- **Deployment**: Docker containerization

## Project Structure
- `src/app`: Main application code and page components
- `src/components`: Reusable UI components
- `src/data`: JSON data files for content (imprint, data governance)
- `public`: Static assets like images

## Docker Setup

This application has been dockerized for easy deployment and consistent environments.

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

### Building and Running with Docker

#### Using Docker Compose (Recommended)

1. Navigate to the webapp directory:
   ```bash
   cd path/to/Bioschmidt/webapp
   ```

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at http://localhost:3000

4. To stop the container:
   ```bash
   docker-compose down
   ```

#### Using Docker Directly

1. Navigate to the webapp directory:
   ```bash
   cd path/to/Bioschmidt/webapp
   ```

2. Build the Docker image:
   ```bash
   docker build -t bioschmidt-webapp .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 -d bioschmidt-webapp
   ```

4. The application will be available at http://localhost:3000

5. To stop the container, first find the container ID:
   ```bash
   docker ps
   ```

6. Then stop it:
   ```bash
   docker stop <container-id>
   ```

## Development Setup

To set up the development environment:

1. Clone the repository:
```bash
git clone https://github.com/your-username/Bioschmidt-Website.git
cd Bioschmidt-Website/Bioschmidt/webapp
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

5. The main page component is located at `src/app/page.js`. Other components can be found in the `src/components` directory.

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

## Contact

For more information about Bioschmidt:
- **Address**: Untere Hauptstraße 76, 2425 Nickelsdorf, Burgenland, Austria
- **Phone**: +43 664 2280760
- **Email**: info@bioschmidt.at
- **Website**: www.bioschmidt.at
