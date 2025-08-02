# Deployment Guide - Freak Fringe Comic Reader

## Cloudflare Pages Deployment

This project is optimized for deployment on Cloudflare Pages with built-in performance and accessibility enhancements.

### Build Configuration

The project uses the following build process:
1. **Thumbnail Generation**: `npm run gen:thumbs` - Creates 1x and 2x resolution thumbnails
2. **TypeScript Compilation**: `tsc -b` - Compiles TypeScript
3. **Vite Build**: `vite build` - Creates optimized production bundle

### Deploy to Cloudflare Pages

1. **Connect Repository**: Connect your Git repository to Cloudflare Pages
2. **Build Settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: (leave empty if deploying from root)

3. **Environment Variables**: None required for basic deployment

### Performance Optimizations Implemented

#### Image Optimization
- **Responsive Images**: Uses `<picture>` elements with `srcset` for 1x/2x displays
- **Lazy Loading**: Gallery thumbnails use `loading="lazy"`
- **Preloading**: Adjacent comic pages are preloaded for smooth navigation
- **Dimension Hints**: Width/height attributes prevent layout shift

#### Accessibility Enhancements
- **Alt Text**: Comprehensive alt text from comic titles and descriptions
- **Keyboard Navigation**: Full keyboard support (arrows, ESC)
- **Focus Management**: Proper focus states and indicators
- **Semantic HTML**: Uses proper heading hierarchy and ARIA labels

#### Caching Strategy
- **Static Assets**: Long-term caching (1 year) for images
- **HTML**: Short-term caching with CDN optimization
- **API Preconnects**: DNS prefetching for external image sources

### Optional: Cloudflare Image Resizing

To enable Cloudflare's Image Resizing service (Polish/Mirage):

1. Go to your Cloudflare dashboard
2. Navigate to **Speed** > **Optimization**
3. Enable **Polish** for automatic image optimization
4. Enable **Mirage** for adaptive image loading

This will provide additional image optimization on top of the responsive images already implemented.

### Custom Domain Setup

1. Add your custom domain in Cloudflare Pages settings
2. DNS will be automatically configured
3. SSL certificates are provisioned automatically

### Performance Testing

After deployment, test performance with:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

Expected scores:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

### Monitoring

Cloudflare Pages provides built-in analytics:
- Page views and unique visitors
- Bandwidth usage
- Performance metrics
- Error rates

### Troubleshooting

**Build Failures**:
- Ensure Node.js version compatibility (18+)
- Check for TypeScript errors: `npm run lint`
- Verify all dependencies are installed

**Image Loading Issues**:
- Check CORS settings for external image sources
- Verify thumbnail generation completed successfully
- Test srcset URLs in browser dev tools

**Performance Issues**:
- Enable Cloudflare caching rules
- Optimize image sizes if using real comic images
- Consider lazy loading improvements for large galleries

### Future Enhancements

Consider these additional optimizations:
- **WebP/AVIF Support**: Add modern image format support
- **Service Worker**: Implement offline reading capability
- **Progressive Web App**: Add PWA manifest and features
- **Image CDN**: Migrate to dedicated image CDN for better global performance
