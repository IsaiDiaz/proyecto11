export interface Celular {
    id: number;
    nombre: string;
    precio: number;
    descripcionCorta: string;
    descripcionLarga: string;
    imagen:string;
}

export const celulares = [
    {
        id:1,
        nombre: 'Samsung Galaxy S10+',
        precio: 4877,
        descripcionCorta: 'Samsung Galaxy S10+ - Smartphone de 6.4" QHD+ Curved Dynamic AMOLED, 16 MP, Exynos 9820, Wireless & Fast & Reverse Charging, 128 GB, Prisma Negro (Prism Black).',
        descripcionLarga: 'Tres cámara s traseras con dual aperture 12 mp main, f1.5/ f2.4 dp af + y dos frontales main, f1.9 dp af+ 8 mp ultra-wide.\n Toma impresionantes fotos cinemáticas con los 123 grados de visión de la cámara ultra gran angular. \n Toma fotos tanto de día como de noche con la apertura dual, que controla, ajusta y optimiza la luz antes de que toques el obturador. \n Capacidad de almacenamiento interno de 128 GB + ranura para microSD (hasta 512 GB) y 8 GB de RAM. \n El procesador cuenta con un NPU para la cámara inteligente. \n Diseño con pantalla Infinity-O 6.4" Quad HD+ (3040 x 1440) Curved Dynamic Amoled. \n Hemos conseguido ocultar discretamente la cámara en la pantalla sin perder calidad en las fotografías \n Batería inteligente de 24 horas con autonomía, 4.100 mAh con carga rápida y posibilidad de compartir batería de manera inalámbrica \n El sensor ultrasónico de huella dactilar te proporciona la máxima seguridad de manera invisible.',
        imagen: './assets/Samsung.jpg' 
    },
    {
        id:2,
        nombre: 'Huawei P20 Pro',
        precio: 3170,
        descripcionCorta: 'Huawei P20 Pro 128 GB/6 GB Dual SIM Smartphone - Black, 6.1 Pulgadas, Android 8.1, 24 Mp (International Version).',
        descripcionLarga: 'del mundo primera Leica triple cámara con 40 Mega pixeles. \n Master Ki asistente de cámara de detección automática de escenas y de objeto. \n Cámara frontal de 24 Mp de fusión de Light con brillante de bajo Light de Performance. \n Potente batería de 4000 mAh con Huawei caja fuerte super Charge. \n Contenido del envío: HUAWEI P20 Pro, auriculares, super Charge digital estéreo, cargador, batería recargable USB tipo C, USB Tipo C cable, guía de inicio rápido, funda, USB Tipo C al adaptador de 3,5 mm.',
        imagen: './assets/Huawei.jpg'
    },
    {
        id:3,
        nombre: 'Sony Xperia 5',
        precio:  3703,
        descripcionCorta: 'Sony Xperia 5 - Smartphone de 6.1" (21:9 CinemaWide, Pantalla OLED Full HD, Cámara Triple Objetivo y Eye AF, 6GB+128GB), Bluetooth, Android, Negro.',
        descripcionLarga: 'Pantalla oled 21:9 cinemawide, 6 1" fhd+ hdr; reproduce los colores tal y como el director los creó usando el "modo creador". \n Cámara con calidad profesional incluye 3 objetivos de 12mp: 16 mm para los paisajes panorámicos, un objetivo versátil de 26 mm y otro de 52 mm para el zoom óptico de 2 aumentos. \n Sumérgete en el sonido cinematográfico dolby atmos. \n Qualcomm snapdragon 855 mobile platform; batería 3140mah; 6 gb ram, soporte microsdxc (hasta 512gb), memoria interna 128gb ufs. \n Sensor huella; graba películas en 4k con los mismos parámetros y configuración de color que los profesionales gracias a cinema pro powered by cinealta.',
        imagen: './assets/Sony.jpg'
    }
];