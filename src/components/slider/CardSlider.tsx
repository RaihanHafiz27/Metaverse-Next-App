"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Card {
  id: number;
  image: string;
  title: string;
  description: string;
}

export default function CardSection() {
  const cards: Card[] = [
    {
      id: 1,
      image: "/images/metaverse.jpeg",
      title: "Metaverse sebagai Solusi di Era Digital",
      description:
        "Metaverse menawarkan potensi sebagai solusi untuk isolasi sosial, terutama selama pandemi. Dengan menyediakan ruang virtual untuk berinteraksi dan berkomunitas, metaverse dapat membantu mengurangi rasa kesepian di kalangan pengguna.",
    },
    {
      id: 2,
      image: "/images/metaverse-7.png",
      title: "Apa Itu Metaverse?",
      description:
        "Metaverse adalah istilah yang sering digunakan untuk menggambarkan dunia virtual imersif yang menggabungkan teknologi augmented reality (AR), virtual reality (VR), dan blockchain. Dunia ini memungkinkan interaksi sosial, ekonomi, dan budaya dalam ruang digital yang terus berkembang. Dengan kata lain, metaverse adalah versi internet yang lebih interaktif dan tiga dimensi.",
    },
    {
      id: 3,
      image: "/images/metaverse-2.jpg",
      title: "Investasi Raksasa Teknologi dalam Pengembangan Metaverse",
      description:
        "Perusahaan teknologi besar seperti Meta dan Microsoft menginvestasikan miliaran dolar dalam mengembangkan platform metaverse. Mereka berusaha untuk menciptakan dunia virtual yang lebih realistis, lengkap dengan perdagangan, sosial, dan hiburan digital, yang dianggap sebagai evolusi masa depan internet.",
    },
    {
      id: 4,
      image: "/images/metaverse-3.jpg",
      title: "Metaverse Mengubah Cara Kita Bekerja dan Bersosialisasi",
      description:
        "Metaverse tidak hanya digunakan untuk bermain game dan hiburan, tetapi juga mulai berdampak pada cara kita bekerja. Dengan ruang kerja virtual yang lebih interaktif, perusahaan mulai mempertimbangkan metaverse sebagai alternatif untuk pertemuan dan kolaborasi jarak jauh yang lebih efektif.",
    },
    {
      id: 5,
      image: "/images/metaverse-4.jpg",
      title: "Dunia Seni Virtual di Metaverse",
      description:
        "Seniman kini dapat memamerkan karya mereka di galeri virtual di dalam metaverse. Hal ini membuka peluang baru bagi seniman digital untuk menjangkau audiens global, sekaligus menciptakan pengalaman seni yang lebih interaktif dan inovatif bagi para penggemar.",
    },
    {
      id: 6,
      image: "/images/metaverse-5.jpg",
      title: "Apa Itu Metaverse?",
      description:
        "Metaverse adalah istilah yang sering digunakan untuk menggambarkan dunia virtual imersif yang menggabungkan teknologi augmented reality (AR), virtual reality (VR), dan blockchain. Dunia ini memungkinkan interaksi sosial, ekonomi, dan budaya dalam ruang digital yang terus berkembang. Dengan kata lain, metaverse adalah versi internet yang lebih interaktif dan tiga dimensi.",
    },
    {
      id: 7,
      image: "/images/metaverse-6.jpg",
      title:
        "Kolaborasi Industri Game dan Metaverse untuk Pengalaman Bermain yang Lebih Canggih",
      description:
        "Industri game menjadi salah satu sektor yang paling aktif mengadopsi metaverse. Dengan fitur-fitur yang menggabungkan realitas virtual dan augmented, pengalaman bermain di metaverse menghadirkan lingkungan yang lebih dinamis, memungkinkan interaksi antar pemain dalam skala global.",
    },
    {
      id: 8,
      image: "/images/metaverse-1.jpg",
      title: "Regulasi dan Kebijakan Metaverse: Tantangan Baru bagi Pemerintah",
      description:
        "Seiring dengan perkembangan metaverse, regulasi dan kebijakan hukum terkait keamanan data dan privasi di dunia virtual menjadi isu penting. Pemerintah di berbagai negara mulai merancang aturan yang memastikan perlindungan bagi pengguna dan integritas sistem digital.",
    },
    // Tambahkan lebih banyak card jika diperlukan
  ];
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Fungsi untuk menangani scroll manual
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = scrollContainerRef.current.offsetWidth; // Geser sebesar lebar kontainer
    setIsScrolling(true);
    if (direction === "left") {
      scrollContainerRef.current.scrollLeft -= scrollAmount;
    } else {
      scrollContainerRef.current.scrollLeft += scrollAmount;
    }
    resetScrollState();
  };

  // Auto scroll logic
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (scrollContainerRef.current) {
        setIsScrolling(true); // Aktifkan efek 3D saat auto-scroll
        const maxScrollLeft =
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current.scrollLeft >= maxScrollLeft) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          scrollContainerRef.current.scrollLeft +=
            scrollContainerRef.current.clientWidth;
        }
        resetScrollState();
      }
    }, 5000); // Interval geser otomatis 3 detik
    return () => clearInterval(autoScroll);
  }, []);

  // Event drag-to-scroll
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setIsScrolling(true);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // adjust scrolling speed here
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => {
    setIsDragging(false);
    resetScrollState();
  };

  // Efek 3D hanya saat scrolling
  const calculateTransform = (index: number) => {
    if (!scrollContainerRef.current || !isScrolling) return ""; // Jika tidak sedang scrolling, hilangkan efek 3D

    const scrollPos = scrollContainerRef.current.scrollLeft;
    const cardWidth = scrollContainerRef.current.clientWidth / cards.length;
    const relativePos = (index * cardWidth - scrollPos) / cardWidth;

    const maxRotation = 15; // Maximum rotation in degrees for 3D effect
    const rotateY = Math.max(
      -maxRotation,
      Math.min(maxRotation, relativePos * 10)
    ); // Efek 3D
    return `rotateY(${rotateY}deg)`;
  };

  // Fungsi untuk reset efek scroll setelah selesai
  const resetScrollState = () => {
    setTimeout(() => {
      setIsScrolling(false); // Menghilangkan efek 3D setelah scroll selesai
    }, 1000); // Timeout untuk memberikan efek selesai
  };

  return (
    <div className="">
      {/* Container Scrollable Cards */}
      <div
        ref={scrollContainerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        className="flex space-x-4 pb-4 overflow-x-hidden cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth", perspective: "1200px" }} // Add perspective for 3D effect
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="min-w-[300px] bg-white rounded-lg shadow-md"
            style={{
              transform: calculateTransform(index),
              transition: isScrolling
                ? "transform 0.2s ease-out"
                : "transform 0.5s ease-out",
            }}
          >
            <Image
              className="w-full h-[150px] object-cover rounded-t-md"
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
            />
            <div className="px-4 py-2">
              <h3 className="text-base font-semibold">{card.title}</h3>
              <p className="text-sm">{card.description.substring(0, 100)}...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Navigasi, hanya tampil di layar desktop */}
      <div className="hidden md:flex justify-center space-x-4 mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => handleScroll("left")}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => handleScroll("right")}
        >
          Next
        </button>
      </div>
    </div>
  );
}
