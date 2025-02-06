"use client";
import Image from "next/image";
import profileImg from "../../public/p1.png";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import projImg1 from "../../public/educ2.jpg";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-between items-center mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={profileImg}
              alt="profile-image"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10 ">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
                Vickod
              </h1>
              <p className="text-gray-600 dark:text-gray-400 ">
                Full-Stack Developer
              </p>
              <p className="text-gray-600 dark:text-gray-400 ">Freelancer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">BlaBlabla</h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl ">
                Chaque ligne de code est une nouvelle opportunité de créer
                quelque chose d'innovant et de fonctionnel. J'aspire à
                transformer des idées complexes en solutions simples et
                élégantes, tout en continuant à développer mes compétences et à
                apprendre les dernières technologies du secteur.
              </p>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2xl ">
                Passionné par l'informatique depuis l'âge de 10 ans, je suis un
                développeur fullstack récemment diplômé. Mon expertise englobe
                la création de solutions web innovantes, alliant design intuitif
                et robustesse technique. Avec une curiosité insatiable et une
                passion indéfectible pour le codage, j'ai consacré mon temps à
                développer des compétences techniques solides et diversifiées.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <Button className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-x-105 ">
                Resume
              </Button>
              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </Link>

              <Link
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experiences
            </h2>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    Juillet, 2024
                  </p>
                  <p className="font-medium">Developpeur web</p>
                  <p className="text-blue-600 text-sm dark:text-blue-400">
                    Hdm network
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-400  ">
                Je suis toujours à la recherche de nouvelles opportunités pour
                appliquer mes compétences et ma passion pour le codage. Que vous
                ayez besoin d'un site web dynamique, d'une application intuitive
                ou de toute autre solution numérique, je suis prêt à relever le
                défi.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    Juillet, 2024
                  </p>
                  <p className="font-medium">Developpeur web</p>
                  <p className="text-blue-600 text-sm dark:text-blue-400">
                    Hdm network
                  </p>
                </div>
              </div>
              <p className="text-gray-600 text-sm dark:text-gray-400  ">
                Je suis toujours à la recherche de nouvelles opportunités pour
                appliquer mes compétences et ma passion pour le codage. Que vous
                ayez besoin d'un site web dynamique, d'une application intuitive
                ou de toute autre solution numérique, je suis prêt à relever le
                défi.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-gray-600 text-sm dark:text-gray-400">
                    Juillet, 2024
                  </p>
                  <p className="font-medium">Developpeur web</p>
                  <p className="text-blue-600 text-sm dark:text-blue-400">
                    Hdm network
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm dark:text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                nesciunt magni sapiente, maiores aut eum reprehenderit ullam
                commodi eligendi possimus, dolorum illum culpa animi, sed quas
                odio repudiandae? Fugiat, quod.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={projImg1} alt="" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Projet 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL
                      </p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={projImg1} alt="" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Projet 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL
                      </p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={projImg1} alt="" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Projet 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL
                      </p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={projImg1} alt="" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Projet 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL
                      </p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <CardContent className="p-4">
                  <Image src={projImg1} alt="" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Projet 1</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Next.js, MySQL
                      </p>
                    </div>
                    <Button variant="ghost" size="icon"></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>
          <p className="text-gray-500">© 2025 Vickod</p>
        </main>
      </div>
    </div>
  );
}
