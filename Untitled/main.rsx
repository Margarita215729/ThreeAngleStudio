<App>
  <Frame
    id="$main"
    enableFullBleed={false}
    isHiddenOnDesktop={false}
    isHiddenOnMobile={false}
    padding="8px 12px"
    sticky={null}
    type="main"
  >
    <Form
      id="form1"
      footerPadding="4px 12px"
      headerPadding="4px 12px"
      padding="12px"
      requireValidation={true}
      resetAfterSubmit={true}
      showBody={true}
      showFooter={true}
      showHeader={true}
    >
      <Header>
        <Text
          id="formTitle1"
          disableMarkdown={true}
          horizontalAlign="center"
          value="Contact Us"
          verticalAlign="center"
        />
      </Header>
      <Body>
        <TextInput
          id="textInput1"
          label="Name"
          labelPosition="top"
          placeholder="Your Name"
          showClear={true}
        />
        <TextInput
          id="email1"
          iconBefore="bold/mail-send-envelope"
          label="Email"
          labelPosition="top"
          patternType="email"
          placeholder="you@example.com"
        />
        <PhoneNumberInput
          id="phoneNumber1"
          label="Phone"
          labelPosition="top"
          lockedCountryCode="US"
          value="+1"
        />
        <Select
          id="select1"
          emptyMessage="No options"
          hideLabel={false}
          itemMode="static"
          label="Service"
          labelPosition="top"
          overlayMaxHeight={375}
          placeholder="Select a service"
          showSelectionIndicator={true}
        >
          <Option id="a23af" value="Makeup & Photo Session" />
          <Option id="0c1cd" value="Photo Session" />
          <Option id="05a0d" value="Makeup Session" />
          <Option
            id="36a46"
            disabled={false}
            hidden={false}
            value="Help Me Decide"
          />
        </Select>
        <TextInput
          id="textInput2"
          label="Message"
          labelPosition="top"
          placeholder="Your Message"
        />
        <FileDropzone
          id="fileDropzone1"
          _isUpgraded={true}
          appendNewSelection={true}
          iconBefore="bold/ecology-science-alien-alternate"
          label=""
          labelPosition="top"
          maxCount={20}
          maxSize="250mb"
          placeholder="Attach Inspiration Photos"
          selectionType="multiple"
        />
      </Body>
      <Footer>
        <Button
          id="button1"
          submit={true}
          submitTargetId="form1"
          text="Submit"
        />
      </Footer>
      <Event
        event="submit"
        method="confetti"
        params={{ ordered: [] }}
        pluginId=""
        type="util"
        waitMs="0"
        waitType="debounce"
      />
    </Form>
  </Frame>
</App>
