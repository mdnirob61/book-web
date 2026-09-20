import Image from 'next/image';
import React from 'react';
import BannerImg from '@/app/assests/hero_img.jpg';

const Banner = () => {
    return (
        <section className="container mx-auto my-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-2xl bg-linear-to-r from-slate-100 to-emerald-50 px-8 py-10 md:px-12">

                {/* Left Content */}
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">
                        Discover Your Next Read
                    </p>

                    <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-800 md:text-4xl">
                        Books to freshen up
                        <br />
                        your bookshelf
                    </h2>

                    <p className="mb-6 max-w-md text-sm leading-6 text-slate-600">
                        Discover amazing stories, inspiring ideas, and your next
                        favorite book.
                    </p>

                    <button className="btn btn-success rounded-lg px-6 text-white">
                        View The List →
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                    <Image
                        src={BannerImg}
                        alt="Books on a bookshelf"
                        width={420}
                        height={320}
                        priority
                        className="rounded-xl object-cover shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;

