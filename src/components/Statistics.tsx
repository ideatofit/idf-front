import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '4', label: 'Healthy Customers' },
  { value: '3', label: 'Satisfaction Rate' },
  { value: '3.8', label: 'Lives Improved' },
];

const Statistics: React.FC = () => {
  const [viewPortEntered, setViewPortEntered] = React.useState(false);

  return (
    <section className='w-full bg-backgroundColor text-themeColor px-[20%] my-8'>
      <div className='flex flex-col text-center'>
        <h1 className='text-5xl my-2'>Improving Health Worldwide</h1>
        <p className='font-light text-gray-400 my-2'>
          Our mission is to improve the health and well-being of people around the world.
        </p>
      </div>
      <VisibilitySensor
        onChange={(isVisible: any) => {
          if (isVisible) {
            setViewPortEntered(true);
          }
        }}
      >
        <div className='flex w-full justify-around my-4'>
          {stats.map((stat, i) => (
            <div
              key={i}
              className='text-center p-8 bg-gray-700 rounded-xl h-1/2 w-1/2 mx-2 shadow-md shadow-gray-400'
            >
              <dl>
                <dt className='text-4xl font-bold text-white'>
                  {viewPortEntered && (
                    <div className='flex justify-center'>
                    <CountUp end={parseInt(stat.value)} />
                    K
                    </div>
                  )}
                </dt>
                <dd className='my-2 text-gray-400'>{stat.label}</dd>
              </dl>
            </div>
          ))}
        </div>
      </VisibilitySensor>
    </section>
  );
};

export default Statistics;