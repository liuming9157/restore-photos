import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3'>
      <div className="w-full grid grid-cols-3">
        <div>
          <div className="text-lg font-bold">Products</div>
          <div>
            <a href="https://55ai.store" title="AI Navigation" className="text-sm underline" target='_blank'>AI Navigation</a><br/>
            <a href="https://tinypic.55ai.store" title="Image Compress" className="text-sm underline" target='_blank'>Image Compress</a><br/>
            <a href="https://inpainter.55ai.store" title="Image Inpainter" className="text-sm underline" target='_blank'>Image Inpainter</a><br/>
            <a href="https://ps.55ai.store" title="Online Photoshop" className="text-sm underline" target='_blank'>Online Photoshop</a>

          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Friends</div>
          <div>
            <a href="https://www.aigotools.com" title="AigoTools" className="text-sm underline" target='_blank'>AigoTools</a>
          </div>
        </div>
        <div>
          <div className="text-lg font-bold">Legal</div>
          <div>
            <Link href="/terms-of-service" title="Terms of Service" className="text-sm underline">Terms of  Service</Link><br/>
            <Link href="/privacy-policy" title="Privacy Policy" className="text-sm underline">Privacy Policy</Link>

          </div>
        </div>

      </div>
    </footer>
  );
}
