import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { SessionProvider } from "next-auth/react"
import Head from 'next/head';


export default function App({ Component, pageProps: {
  session, ...pageProps
}, router }: AppProps) {
  return (
    <motion.div
    key={router.route}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0.6 }}
    transition={{ duration: 0.3 }}
  >
      <Head>
        <title>Ideaotift - Health and Fitness Tips | Workout Plans </title>
        <meta name="description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta name="keywords" content="Ideaotift, fitness, health, workout, diet, expert advice, Healthy living tips
,meal planning services
,nutritionist consultation
,Weight loss coaching
,Online fitness classes
,Fitness training programs
,Workout routines for weight loss
,Low-calorie meal ideas
,Plant-based diet plans
,High-fiber recipes
,Gluten-free meal ideas
,Meal prep delivery services
,Healthy eating habits
,Meal replacement options
,Mindful eating techniques
,High-intensity interval training (HIIT) workouts
,Resistance training programs
,Cardiovascular exercise routines
,Nutrition education programs
,Personalized workout plans." />
        <meta name="author" content="deepak sahu" />

        {/* open graph for social media cards */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ideaotift - Health and Fitness Tips | Workout Plans" />
        <meta property="og:description" content="Ideaotift provides you with the latest health and fitness tips, workout plans, diet plans, and expert advice to help you achieve your fitness goals. Get fit, stay healthy, and live a better life with Ideaotift." />
        <meta property="og:image" content="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" />
        <meta property="og:url" content="https://www.ideatofit.com/" />

        <link rel="canonical" href="https://www.ideatofit.com/" />
        <link rel="icon" href="https://res.cloudinary.com/dyurrus9p/image/upload/v1679590456/logo_fy99df.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

        {/* twitters open graph */}
        <meta property="twitter:card" content="Summary Large Image" />
        <meta property="twitter:title" content="Title of Your Content Here" />
        <meta property="twitter:description" content="Description of Your Content Here" />
        <meta property="twitter:image" content="Link to Image File Here" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </motion.div>
  )
}
