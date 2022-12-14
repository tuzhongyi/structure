import { Injectable } from '@angular/core';
import { IModel } from 'src/app/models/model.interface';
import {
  IConverter,
  IPromiseConverter,
} from '../../interfaces/converter.interface';
import { EventRecord } from '../../models/event-record/event.record';
import { FaceEventRecord } from '../../models/event-record/face-event.record';
import { Language } from '../../tools/language';
import { Medium } from '../../tools/medium';
import { CommonDetailModel } from './common-detail.model';
import { LinePerRecord } from 'src/app/enums/line-per-record.enum';
import { formatDate } from '@angular/common';
import { VehicleEventRecord } from 'src/app/models/event-record/vehicle-event.record';
import { BodyRecord } from 'src/app/models/body-record.model';
import { FaceRecord } from 'src/app/models/face-record.model';
import { MuckCarEventRecord } from 'src/app/models/event-record/muck-car-event.record';
import { VehicleRecord } from 'src/app/models/vehicle-record.model';
import { VehicleDeployControlTask } from 'src/app/models/vehicle-deploy-control-task.model';
import { FaceDeployControlTask } from 'src/app/models/face-deploy-control-task.model';

@Injectable({
  providedIn: 'root',
})
export class CommonDetailConverter {
  Convert(source: IModel, ...res: any[]): CommonDetailModel {
    if (source instanceof FaceEventRecord) {
      return this._fromFaceEventRecord(source);
    } else if (source instanceof VehicleEventRecord) {
      return this._fromVehicleEventRecord(source);
    } else if (source instanceof MuckCarEventRecord) {
      return this._fromMuckCarEventRecord(source);
    } else if (source instanceof BodyRecord) {
      return this._fromBodyRecord(source);
    } else if (source instanceof FaceRecord) {
      return this._fromFaceRecord(source);
    } else if (source instanceof VehicleRecord) {
      return this._fromVehicleRecord(source);
    } else if (source instanceof FaceDeployControlTask) {
      return this._fromFaceTask(source);
    } else if (source instanceof VehicleDeployControlTask) {
      return this._fromVehicleTask(source);
    }
    throw new Error('Error');
  }
  private _fromFaceEventRecord(item: FaceEventRecord) {
    let model = new CommonDetailModel();
    model.Title = '??????????????????';
    model.ContainerWidth = 655;
    model.ContainerHeight = 470;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.One;
    // model.ImageUrl = 'assets/img/sample-face.png';
    // model.BackgroundImageUrl = 'assets/img/sample-face.png';

    model.ImageUrl = Medium.img(item.ImageUrl);
    model.BackgroundImageUrl = Medium.img(item.Data.BackgroundImageUrl);
    model.Records = [
      {
        Icon: 'howell-icon-alarm3',
        PropertyDes: '????????????',
        PropertyValue: item.Data.TaskName ?? '??????',
      },

      {
        Icon: 'howell-icon-sex',
        PropertyDes: '??????',
        PropertyValue: item.Data.RegisterGenderName ?? '??????',
      },
      {
        Icon: 'howell-icon-Face',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PersonName ?? '??????',
      },
      {
        Icon: 'howell-icon-idcard',
        PropertyDes: '????????????',
        PropertyValue: item.Data.CertificateNumber ?? '??????',
      },
      {
        Icon: 'howell-icon-video',
        PropertyDes: '????????????',
        PropertyValue: item.ResourceName ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue:
          formatDate(item.EventTime, 'yyyy-MM-dd HH:mm:ss', 'en') ?? '??????',
      },
    ];

    return model;
  }

  private _fromVehicleEventRecord(item: VehicleEventRecord) {
    let model = new CommonDetailModel();
    model.Title = '??????????????????';
    model.ContainerWidth = 820;
    model.ContainerHeight = 470;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.Two;

    model.ImageUrl = Medium.img(item.ImageUrl);
    model.BackgroundImageUrl = Medium.img(item.ImageUrl);
    model.Records = [
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateNo ?? '??????',
      },

      {
        Icon: 'howell-icon-Face',
        PropertyDes: '????????????',
        PropertyValue: item.Data.VehicleColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.Data.VehicleColorDepthName ?? '??????',
      },
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.Data.VehicleLogoName ?? '??????',
      },
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '???????????????',
        PropertyValue: item.Data.PlateTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateNo ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '???????????????',
        PropertyValue: item.Data.VehicleSubLogoName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2e',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-speed',
        PropertyDes: '????????????',
        PropertyValue: item.Data.VehicleSpeed?.toString() ?? '??????',
      },
      {
        Icon: 'howell-icon-user-admi',
        PropertyDes: '?????????',
        PropertyValue: item.Data.PilotSafebeltName ?? '??????',
      },
      {
        Icon: 'howell-icon-phone',
        PropertyDes: '?????????',
        PropertyValue: item.Data.UsePhoneName ?? '??????',
      },
    ];

    return model;
  }

  private _fromMuckCarEventRecord(item: MuckCarEventRecord) {
    let model = new CommonDetailModel();
    model.Title = '?????????????????????';
    model.ContainerWidth = 655;
    model.ContainerHeight = 470;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.One;

    model.ImageUrl = Medium.img(item.Data.ThumbnailUrl);
    model.BackgroundImageUrl = Medium.img(item.Data.BackgroundImageUrl);
    model.Records = [
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateNo ?? '??????',
      },

      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.Data.VehicleColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.Data.PlateColor ?? '??????',
      },
      {
        Icon: 'howell-icon-Face',
        PropertyDes: '????????????',
        PropertyValue: item.Data.CrossingName ?? '??????',
      },
      {
        Icon: 'howell-icon-dustcart',
        PropertyDes: '????????????',
        PropertyValue: item.Data.IntelligentTypeName ?? '??????',
      },
    ];

    return model;
  }

  private _fromBodyRecord(item: BodyRecord) {
    let model = new CommonDetailModel();
    model.Title = '????????????';
    model.ContainerWidth = 820;
    model.ContainerHeight = 470;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.Two;

    model.ImageUrl = Medium.img(item.TargetPictureUrl);
    model.BackgroundImageUrl = Medium.img(item.BackgroundUrl);
    model.Records = [
      {
        Icon: 'howell-icon-sex',
        PropertyDes: '??????',
        PropertyValue: item.GenderName ?? '??????',
      },

      {
        Icon: 'howell-icon-hairstyle',
        PropertyDes: '??????',
        PropertyValue: item.HairStyleName ?? '??????',
      },
      {
        Icon: 'howell-icon-birthday',
        PropertyDes: '?????????',
        PropertyValue: item.AgeGroupName ?? '??????',
      },
      {
        Icon: 'howell-icon-jacket',
        PropertyDes: '????????????',
        PropertyValue: item.JacketTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-sunglasses',
        PropertyDes: '???????????????',
        PropertyValue: item.GlassName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.JacketColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-bag',
        PropertyDes: '????????????',
        PropertyValue: item.BagName ?? '??????',
      },
      {
        Icon: 'howell-icon-trousers',
        PropertyDes: '????????????',
        PropertyValue: item.TrousersTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-hat',
        PropertyDes: '???????????????',
        PropertyValue: item.HatName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.TrousersColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-mask',
        PropertyDes: '???????????????',
        PropertyValue: item.MaskName ?? '??????',
      },
      {
        Icon: 'howell-icon-bicycle',
        PropertyDes: '????????????',
        PropertyValue: item.RideName ?? '??????',
      },
      {
        Icon: 'howell-icon-carrying',
        PropertyDes: '???????????????',
        PropertyValue: item.ThingsName ?? '??????',
      },
      {
        Icon: 'howell-icon-bicycle',
        PropertyDes: '????????????',
        PropertyValue: item.CyclingTypeName ?? '??????',
      },
    ];

    return model;
  }

  private _fromFaceRecord(item: FaceRecord) {
    let model = new CommonDetailModel();
    model.Title = '????????????';
    model.ContainerWidth = 655;
    model.ContainerHeight = 470;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.One;

    model.ImageUrl = Medium.img(item.FacePictureUrl);

    model.BackgroundImageUrl = Medium.img(item.BackgroundUrl);
    model.Records = [
      {
        Icon: 'howell-icon-Face',
        PropertyDes: '??????',
        PropertyValue: item.Name ?? '??????',
      },

      {
        Icon: 'howell-icon-sex',
        PropertyDes: '??????',
        PropertyValue: item.GenderName ?? '??????',
      },
      {
        Icon: 'howell-icon-birthday',
        PropertyDes: '?????????',
        PropertyValue: item.AgeGroupName ?? '??????',
      },

      {
        Icon: 'howell-icon-sunglasses',
        PropertyDes: '???????????????',
        PropertyValue: item.GlassName ?? '??????',
      },
      {
        Icon: 'howell-icon-Face',
        PropertyDes: '????????????',
        PropertyValue: item.SmileName ?? '??????',
      },
      {
        Icon: 'howell-icon-video',
        PropertyDes: '???????????????',
        PropertyValue: item.CameraName ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue: item.CaptureTime
          ? formatDate(item.CaptureTime, 'yyyy-MM-dd HH:mm:ss', 'en')
          : '??????',
      },
    ];

    return model;
  }

  private _fromVehicleRecord(item: VehicleRecord) {
    let model = new CommonDetailModel();
    model.Title = '????????????';
    model.ContainerWidth = 820;
    model.ContainerHeight = 460;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.Two;

    model.ImageUrl = Medium.img(item.PlatePictureUrl);
    model.BackgroundImageUrl = Medium.img(item.BackgroundUrl);
    model.Records = [
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.PlateNo ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.PlateColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleColorDepthName ?? '??????',
      },
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.PlateTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleTypeName ?? '??????',
      },

      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.PlateTail ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '???????????????',
        PropertyValue: item.VehicleLogoName ?? '??????',
      },

      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.PlateProvince ?? '??????',
      },

      {
        Icon: 'howell-icon-car2',
        PropertyDes: '???????????????',
        PropertyValue: item.VehicleSubLogoName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.PlateStateName ?? '??????',
      },
      {
        Icon: 'howell-icon-speed',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleSpeed?.toString() ?? '??????',
      },

      {
        Icon: 'howell-icon-user-admin',
        PropertyDes: '??????????????????',
        PropertyValue: item.PilotSafebeltName ?? '??????',
      },
      {
        Icon: 'howell-icon-phone',
        PropertyDes: '???????????????',
        PropertyValue: item.UsePhoneName ?? '??????',
      },
    ];

    return model;
  }

  private _fromFaceTask(item: FaceDeployControlTask) {
    let model = new CommonDetailModel();
    model.Title = '??????????????????';
    model.ContainerWidth = 655;
    model.ContainerHeight = 310;
    model.LeftWidth = 180;
    model.LinePerRecord = LinePerRecord.One;

    model.ImageUrl = item.ImageData;
    model.Records = [
      {
        Icon: 'howell-icon-details',
        PropertyDes: '????????????',
        PropertyValue: item.TaskName ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue:
          formatDate(item.BeginTime, 'yyyy-MM-dd HH:mm:ss', 'en') ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue:
          formatDate(item.EndTime, 'yyyy-MM-dd HH:mm:ss', 'en') ?? '??????',
      },
      {
        Icon: 'mdi mdi-note-outline',
        PropertyDes: '??????',
        PropertyValue: item.Remark ?? '',
      },
    ];

    return model;
  }

  private _fromVehicleTask(item: VehicleDeployControlTask) {
    let model = new CommonDetailModel();
    model.Title = '??????????????????';
    model.ContainerWidth = 520;
    model.ContainerHeight = 520;
    model.LeftWidth = 0;
    model.LinePerRecord = LinePerRecord.One;

    model.Records = [
      {
        Icon: 'howell-icon-details',
        PropertyDes: '????????????',
        PropertyValue: item.TaskName ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue:
          formatDate(item.BeginTime, 'yyyy-MM-dd HH:mm:ss', 'en') ?? '??????',
      },
      {
        Icon: 'howell-icon-time',
        PropertyDes: '????????????',
        PropertyValue:
          formatDate(item.EndTime, 'yyyy-MM-dd HH:mm:ss', 'en') ?? '??????',
      },
      {
        Icon: 'howell-icon-license_plate',
        PropertyDes: '????????????',
        PropertyValue: item.PlateNo ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-color',
        PropertyDes: '????????????',
        PropertyValue: item.PlateColorName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '????????????',
        PropertyValue: item.VehicleTypeName ?? '??????',
      },
      {
        Icon: 'howell-icon-car2',
        PropertyDes: '???????????????',
        PropertyValue: item.VehicleLogoName ?? '??????',
      },
    ];

    return model;
  }
}
