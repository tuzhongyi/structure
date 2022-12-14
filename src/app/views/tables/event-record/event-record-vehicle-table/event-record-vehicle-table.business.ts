import { EventEmitter, Injectable } from '@angular/core';
import { IBusiness } from 'src/app/interfaces/business.interface';
import {
  IConverter,
  IPromiseConverter,
} from 'src/app/interfaces/converter.interface';
import { Duration } from 'src/app/models/duration.model';
import { VehicleEventRecord } from 'src/app/models/event-record/vehicle-event.record';

import { PagedList } from 'src/app/models/page-list.model';
import { GetVehicleEventRecordsParams } from 'src/app/network/request/events/events.params';
import { EventRequestSerivce } from 'src/app/network/request/events/events.service';
import { EventRecordVehicleTableConverter } from './event-record-vehicle-table.converter';
import {
  EventRecordVehicleTableArgs,
  EventRecordVehicleTableModel,
} from './event-record-vehicle-table.model';

@Injectable()
export class EventRecordVehicleTableBusiness
  implements
    IBusiness<
      PagedList<VehicleEventRecord>,
      PagedList<EventRecordVehicleTableModel>
    >
{
  constructor(private service: EventRequestSerivce) {}
  Converter = new EventRecordVehicleTableConverter();
  loading?: EventEmitter<void> | undefined;
  async load(
    args: EventRecordVehicleTableArgs
  ): Promise<PagedList<EventRecordVehicleTableModel>> {
    let data = await this.getData(
      args.duration,
      args.page.PageIndex,
      args.page.PageSize,
      args.cameraIds,
      args.name
    );
    let model = this.Converter.Convert(data);
    return model;
  }
  getData(
    duration: Duration,
    index: number,
    size: number,
    cameraIds?: string[],
    name?: string
  ): Promise<PagedList<VehicleEventRecord>> {
    let params = new GetVehicleEventRecordsParams();
    params.BeginTime = duration.begin;
    params.EndTime = duration.end;
    params.PageIndex = index;
    params.PageSize = size;
    params.ResourceName = name;
    params.ResourceIds = cameraIds;
    return this.service.record.vehicle.list(params);
  }
}
