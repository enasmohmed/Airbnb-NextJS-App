import React from 'react'
import MainHeading from './MainHeading'
import { getLive } from '@/app/utils/api'
import { LiveData } from '@/app/types/app';
import LiveCard from './LiveCard';

async function Live() {

    const LiveData: LiveData  = await getLive();
    console.log(LiveData);

    return <>
        <section className='pt-6'>
            <div className='container'>
                <MainHeading title='Live AnyWhere' />
                <div className='flex space-x-3  overflow-scroll no-scrollbar p-3 -ml-3'>
                    {LiveData.map(item => (
                        <LiveCard key={item.img}  img={item.img} title={item.title} />
                    ))}
                </div>

            </div>
        </section>
    </>
}

export default Live