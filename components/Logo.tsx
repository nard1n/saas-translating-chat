"use client"

import LogoImage from '@logos/chatuplogo.svg';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
        <div className='flex items-center w-72 h-14 '>
            <AspectRatio 
            ratio={16 / 9}
            className='flex items-center justify-center'
            >
                <Image
                    priority
                    src={LogoImage}
                    alt="Anychat logo"
                    className='dark:filter dark:invert'
                />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo