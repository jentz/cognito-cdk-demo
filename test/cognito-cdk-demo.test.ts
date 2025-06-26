import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { CognitoCdkDemoStack } from '../lib/cognito-cdk-demo-stack';

test('Cognito User Pool and Client are created', () => {
  const app = new cdk.App();
  const stack = new CognitoCdkDemoStack(app, 'TestStack');

  const template = Template.fromStack(stack);

  // Assert that a User Pool exists
  template.hasResourceProperties('AWS::Cognito::UserPool', {
    UsernameAttributes: ['email'],
    AutoVerifiedAttributes: ['email'],
  });

  // Assert that a User Pool Client exists
  template.hasResourceProperties('AWS::Cognito::UserPoolClient', {
    GenerateSecret: false,
  });
});
