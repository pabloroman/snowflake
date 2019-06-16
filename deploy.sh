#!/usr/bin/env bash
yarn export
# Install AWS client first: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html
aws s3 sync out/ s3://engineering.tnw/
