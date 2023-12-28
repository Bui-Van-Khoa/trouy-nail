'use client';

import React, { useState, use, useEffect } from 'react';
import {
  loadHeaderImage,
  loadHeaderServices,
} from '@/lib/fetchData/load-header';
import Image from 'next/legacy/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { MenuOutlined, FileImageOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import {HeaderStyled} from './StyledHeader'


const Header = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const [logoTitle, setLogoTitle] = useState<any>({});
  const [navigation, setNavigation] = useState([]);
	const [show, setShow] = useState(false);
	const [shouldRender, setRender] = useState(show);


  useEffect(() => {
    (async () => {
      const imageUrl = await loadHeaderImage();
      const headerInfo = (await loadHeaderServices()) || [];
      setLogoUrl(imageUrl);
      setLogoTitle(headerInfo[0]?.title);
      setNavigation(headerInfo[0]?.nav);
    })();
  }, []);


	useEffect(() => {
    if (show) setRender(true);
  }, [show]);

	const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    <header>
      <HeaderStyled className="grid grid-cols-12 relative">
        <div className=" flex items-center gap-2 col-span-4 tablet:col-span-10">
          <div className="">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt="Logo trouy nail"
                width={80}
                height={80}
              />
            ) : (
              <FileImageOutlined style={{ fontSize: '80px' }} />
            )}
          </div>
          <div>
            <p className="uppercase text-xl">{logoTitle.title}</p>
            <p className="capitalize font-sans">{logoTitle.description}</p>
          </div>
        </div>
        <div className=" flex col-span-6 items-center justify-center gap-5 tablet:hidden">
          {navigation.map((item: any, index: number) => (
            <div
              key={index}
              className={`font-sans ${
                item.isHover
                  ? 'border border-slate-400 px-2 py-1 rounded-lg hover:text-white hover:bg-[#3C6478]'
                  : ''
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="col-span-2 flex gap-2 items-center justify-around tablet:hidden">
          <FontAwesomeIcon icon={faFacebook} className="fa-2xl" style={{ color: " #316FF6" }} />
          <FontAwesomeIcon icon={faInstagram} className="fa-2x" style={{ color: " #FCAF45" }}/>
          <FontAwesomeIcon icon={faEnvelope} className="fa-2x" style={{ color: " #EA4335" }} />
        </div>
        <div className="col-span-2  hidden tablet:flex items-center justify-center">
          <Button
            className="border-0"
            icon={<MenuOutlined />}
            onClick={() => setShow(!show)}
          ></Button>
        </div>
        <div className='absolute w-full right-0 hidden tablet:block '>
				{ shouldRender &&
      		<div
        		className={`bg-white h-screen flex justify-between px-4 py-6 ${show ? 'mountedStyle' : 'unMountedStyle'}`}
						onAnimationEnd={onAnimationEnd}
      		>
					
						<div>
						{navigation.map((item: any, index: number) => (
            <div
              key={index}
              className={`font-sans ${
                item.isHover
                  ? 'border border-slate-400 px-2 py-1 rounded-lg hover:text-white hover:bg-[#3C6478]'
                  : ''
              }`}
            >
              {item.name}
            </div>
          ))}
						</div>
						<div>
						<Button
            	className="border-0"
            	icon={<CloseOutlined />}
            	onClick={() => setShow(!show)}
          	/>
						</div>
					</div>
}
        </div>
      </HeaderStyled>
    </header>
  );
};

export default Header;
