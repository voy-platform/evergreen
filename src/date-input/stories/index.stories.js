import React from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { DateInputField, DateInput } from '..'
import { Button } from '../../buttons'
import { ErrorIcon } from '../../icons'
import { Pane, Card } from '../../layers'
import { Text, Label, Heading } from '../../typography'

const Description = props => <Text is="p" marginTop={0} size={300} color="muted" {...props} />

class Manager extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  state = {}

  render() {
    return this.props.children({
      setState: (...args) => {
        this.setState(...args)
      },
      state: this.state
    })
  }
}

storiesOf('date-input', module)
  .add('DateInput', () => (
    <div>
      {['default', 'none'].map(appearance => (
        <Box key={appearance} padding={40} float="left">
          <Heading marginBottom={24}>Appearance: {appearance}</Heading>
          <Box marginBottom={24} width={360}>
            <Label htmlFor={`${appearance}-32`} size={400} display="block">
              Height 32 (default)
            </Label>
            <Description marginBottom={8}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</Description>
            <DateInput appearance={appearance} name="32" id={`${appearance}-32`} />
          </Box>
          <Box marginBottom={24} width={360}>
            <Label htmlFor={`${appearance}-disabled`} size={400} display="block">
              Disabled
            </Label>
            <DateInput appearance={appearance} name="disabled" id={`${appearance}-disabled`} disabled />
          </Box>
          <Box marginBottom={24} width={360}>
            <Label htmlFor={`${appearance}-disabled`} size={400} display="block">
              Is Invalid
            </Label>
            <DateInput appearance={appearance} name="isInvalid" id={`${appearance}-isInvalid`} isInvalid />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor="small" size={300} display="block" marginBottom={4}>
              Small
            </Label>
            <DateInput appearance={appearance} size="small" name="small" />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor="medium" size={300} display="block" marginBottom={4}>
              Medium
            </Label>
            <DateInput appearance={appearance} name="medium" />
          </Box>
          <Box marginBottom={24}>
            <Label htmlFor={`${appearance}-large`} size={400} display="block" marginBottom={4}>
              Large
            </Label>
            <DateInput appearance={appearance} size="large" name="large" id={`${appearance}-large`} />
          </Box>
        </Box>
      ))}
    </div>
  ))
  .add('DateInputField', () => (
    <Box padding={40}>
      <Heading size={700} marginBottom={40}>
        DateInputField component
      </Heading>
      <DateInputField label="Default date input field" description="This is a description." />
      <DateInputField
        id="ids-are-optional"
        label="A required date input field"
        required
        description="This is a description."
      />
      <DateInputField
        isInvalid
        required
        label="A required date input field"
        description="This is a description."
        validationMessage="This field is required"
      />
      <Manager>
        {({ setState, state }) => {
          return (
            <DateInputField
              label="A controlled date input field"
              required
              description="This is a description."
              value={state.value}
              onChange={e => setState({ value: e.target.value })}
            />
          )
        }}
      </Manager>
    </Box>
  ))
  .add('Settings example', () => {
    return (
      <Pane background="tint1" padding={40} height="100vh" boxSizing="border-box">
        {(() => {
          document.body.style.margin = '0'
          document.body.style.height = '100vh'
        })()}
        <Card elevation={1} backgroundColor="white" width={640} boxSizing="border-box" marginX="auto" padding={48}>
          <Pane is="header" marginBottom={32}>
            <Heading id="general-settings" size={700} marginBottom={8}>
              General Settings
            </Heading>
            <Text color="muted" size={400}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </Text>
          </Pane>
          <DateInputField value="Workspace Prod" required label="Workspace name" />
          <DateInputField
            required
            type="email"
            label="Billing email"
            description="We’ll send invoices and billing-related notifications to you here."
          />
          <DateInputField
            id="ids-are-optional"
            label="Workspace ID"
            disabled
            description="This is your workspace's auto-generated unique identifier."
            hint="You are not able to change this."
          />
          <Button intent="success" appearance="primary" marginTop={32} display="flex">
            Save Changes
          </Button>
          <Pane paddingTop={32} marginTop={32} marginBottom={-8} borderTop>
            <Button intent="danger" iconBefore={ErrorIcon}>
              Delete Your Workspace...
            </Button>
          </Pane>
        </Card>
      </Pane>
    )
  })
