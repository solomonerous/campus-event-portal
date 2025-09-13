# Campus Event Portal (CampusConnect)

A modern, responsive web application designed to serve as the central hub for campus events and activities at Trường Đại học Kỹ thuật ABC. Built with React, TypeScript, and Tailwind CSS, this portal provides students, faculty, and staff with easy access to event information, photo galleries, feedback systems, and contact information.

## 🌟 Features

### 📅 Event Management
- **Upcoming Events**: Display of upcoming campus events with detailed information
- **Past Events**: Archive of completed events for reference
- **Event Categories**: Organized by Academic, Cultural, and Sports categories
- **Event Details**: Comprehensive event information including date, time, location, and descriptions
- **Event Images**: High-quality images for each event

### 🏠 Homepage
- **Dynamic Banner**: Rotating banner images showcasing campus life
- **Featured Events**: Highlighted upcoming events on the homepage
- **Quick Navigation**: Easy access to all portal sections
- **Welcome Message**: Introduction to the campus community

### 📸 Photo Gallery
- **Event Photos**: Visual documentation of past events
- **Categorized Images**: Photos organized by event type and academic year
- **Image Descriptions**: Detailed captions for each photo
- **Responsive Gallery**: Optimized viewing on all devices

### 💬 Feedback System
- **Event Feedback**: Platform for users to share their experiences
- **Community Engagement**: Encourages interaction and improvement suggestions

### 📞 Contact Information
- **Staff Directory**: Contact details for key university personnel
- **Department Contacts**: Information for various departments and offices
- **University Information**: General contact details and location information

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Enhanced experience on tablet devices
- **Desktop Layout**: Full-featured desktop interface
- **Cross-Browser Compatibility**: Works on all modern browsers

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development with enhanced IDE support
- **Vite**: Fast build tool and development server

### UI Components & Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Accessible, unstyled UI components
- **Lucide React**: Beautiful, customizable icons
- **Class Variance Authority**: Type-safe component variants

### Key Libraries
- **React Hook Form**: Performant forms with easy validation
- **React Day Picker**: Calendar component for date selection
- **Embla Carousel**: Lightweight carousel library
- **Recharts**: Composable charting library
- **Sonner**: Toast notification system

### Development Tools
- **Vite**: Build tool and development server
- **SWC**: Fast TypeScript/JavaScript compiler
- **ESLint**: Code linting and formatting

## 📁 Project Structure

```
campus-event-portal/
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # Reusable UI components
│   │   ├── figma/           # Custom components
│   │   ├── HomePage.tsx     # Homepage component
│   │   ├── AboutPage.tsx    # About page component
│   │   ├── EventsPage.tsx   # Events listing page
│   │   ├── GalleryPage.tsx  # Photo gallery page
│   │   ├── FeedbackPage.tsx # Feedback form page
│   │   ├── ContactPage.tsx  # Contact information page
│   │   └── Layout.tsx       # Main layout component
│   ├── data/                # Static data files
│   │   ├── events.json      # Event data
│   │   ├── contacts.json    # Contact information
│   │   └── gallery.json     # Gallery images data
│   ├── styles/              # Global styles
│   │   └── globals.css      # Global CSS styles
│   ├── guidelines/          # Project guidelines
│   │   └── Guidelines.md    # Development guidelines
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Additional styles
├── public/                  # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 16.0 or higher
- **npm**: Version 7.0 or higher (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd campus-event-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Building for Production

```bash
npm run build
```

The built files will be available in the `build` directory.

### Preview Production Build

```bash
npm run preview
```

This will start a local server to preview the production build.

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. Follow these steps to set up deployment:

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push to the `main` branch

### 2. Repository Configuration

The project is configured to deploy to GitHub Pages with the following setup:

- **Base URL**: `/campus-event-portal/` (for production builds)
- **Build Directory**: `build`
- **Workflow File**: `.github/workflows/deploy.yml`

### 3. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the `base` setting in `vite.config.ts` to `/` instead of `/campus-event-portal/`

### 4. Manual Deployment

The deployment happens automatically on every push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### 5. Access Your Site

Once deployed, your site will be available at:
- **GitHub Pages URL**: `https://yourusername.github.io/campus-event-portal/`
- **Custom Domain**: `https://yourdomain.com` (if configured)

## 📊 Data Structure

### Events Data (`src/data/events.json`)
```json
{
  "upcomingEvents": [
    {
      "id": 1,
      "title": "Event Title",
      "date": "2025-07-20",
      "time": "10:00 - 16:00",
      "location": "Event Location",
      "category": "academic|cultural|sports",
      "shortDescription": "Event description",
      "image": "image-url"
    }
  ],
  "pastEvents": [...]
}
```

### Contact Data (`src/data/contacts.json`)
```json
{
  "staff": [
    {
      "id": 1,
      "name": "Staff Name",
      "title": "Position Title",
      "department": "Department Name",
      "phone": "Phone Number",
      "email": "email@university.edu.vn"
    }
  ],
  "university": {
    "name": "University Name",
    "address": "Full Address",
    "phone": "Main Phone",
    "email": "Main Email",
    "website": "Website URL"
  }
}
```

### Gallery Data (`src/data/gallery.json`)
```json
{
  "images": [
    {
      "id": 1,
      "title": "Image Title",
      "year": "Academic Year",
      "category": "academic|cultural|sports",
      "url": "image-url",
      "description": "Image description"
    }
  ]
}
```

## 🎨 Customization

### Adding New Events
1. Edit `src/data/events.json`
2. Add new event objects to the appropriate array (`upcomingEvents` or `pastEvents`)
3. Ensure all required fields are included

### Updating Contact Information
1. Edit `src/data/contacts.json`
2. Modify staff information or university details
3. Changes will be reflected immediately

### Adding Gallery Images
1. Edit `src/data/gallery.json`
2. Add new image objects with proper categorization
3. Use high-quality images for best results

### Styling Customization
- Modify `src/styles/globals.css` for global styles
- Update Tailwind configuration for theme changes
- Customize component styles in individual component files

## 🔧 Configuration

### Vite Configuration
The project uses Vite for building and development. Key configurations:
- **Port**: 3000 (development server)
- **Build Target**: ESNext
- **Output Directory**: build
- **Auto-open**: Browser opens automatically on dev start
- **Base URL**: Automatically configured for GitHub Pages deployment

### GitHub Actions Workflow
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Triggers on pushes to the `main` branch
- Builds the project using Node.js 18
- Deploys to GitHub Pages automatically
- Uses the latest GitHub Actions for optimal performance

### Environment Variables
Create a `.env` file in the root directory for environment-specific configurations:
```env
VITE_API_URL=your_api_url_here
VITE_APP_TITLE=CampusConnect
```

## 📱 Browser Support

- **Chrome**: Version 90+
- **Firefox**: Version 88+
- **Safari**: Version 14+
- **Edge**: Version 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- **Email**: info@university.edu.vn
- **Phone**: 024 1234 5678
- **Address**: 123 Đường Đại học, Quận Cầu Giấy, Hà Nội

## 🙏 Acknowledgments

- **Radix UI** for accessible component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **Unsplash** for high-quality placeholder images
- **React Community** for excellent documentation and resources

---

**CampusConnect** - Connecting students, faculty, and staff through campus events and activities.