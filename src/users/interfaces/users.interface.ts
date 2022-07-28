import { Document } from 'mongoose';

export interface Users extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly type: string;
  readonly health_info: {
    birthdate: Date,
    height: number,
    weight: number,
    last_updated: Date,
  };
}
