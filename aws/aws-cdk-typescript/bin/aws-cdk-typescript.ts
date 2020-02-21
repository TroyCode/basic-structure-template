#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AwsCdkTypescriptStack } from '../lib/aws-cdk-typescript-stack';

const app = new cdk.App();
new AwsCdkTypescriptStack(app, 'AwsCdkTypescriptStack');
