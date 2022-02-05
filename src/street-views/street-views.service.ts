import { Injectable } from '@nestjs/common';
import { CreateStreetViewDto } from './dto/create-street-view.dto';
import { UpdateStreetViewDto } from './dto/update-street-view.dto';

@Injectable()
export class StreetViewsService {
  create(createStreetViewDto: CreateStreetViewDto) {
    return 'This action adds a new streetView';
  }

  findAll() {
    return `This action returns all streetViews`;
  }


  //look into serverside rendering with a serverless browser
  //phantom js
  //headless browser/chrome
  //puppeteer (maybe for testing)
  //maybe node js script

  findOne(): any {
    let panorama: google.maps.StreetViewPanorama;
    // const view = document.createElement("div");
    // document.body.append(view);
    // view.id = "street-view";
    let element;

    function initialize() {
      panorama = new google.maps.StreetViewPanorama(
         //document.getElementById("street-view") as HTMLElement,
        element as HTMLElement,
        {
          position: { lat: 37.86926, lng: -122.254811 },
          pov: { heading: 165, pitch: 0 },
          zoom: 1,
        }
      );
    }
    initialize();
    console.log("panorama:",panorama)

    const panoView = `<div>${panorama}</div>`;
    return panoView;
  }

  update(id: number, updateStreetViewDto: UpdateStreetViewDto) {
    return `This action updates a #${id} streetView`;
  }

  remove(id: number) {
    return `This action removes a #${id} streetView`;
  }
}
