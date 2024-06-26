package logout

import (
	"context"
	"fmt"
	"github.com/monea-xyz/kurtosis/cli/cli/command_framework/lowlevel"
	"github.com/monea-xyz/kurtosis/cli/cli/command_framework/lowlevel/args"
	"github.com/monea-xyz/kurtosis/cli/cli/command_framework/lowlevel/flags"
	"github.com/monea-xyz/kurtosis/cli/cli/command_str_consts"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/github/login"
	"github.com/monea-xyz/kurtosis/cli/cli/helpers/github_auth_store"
	"github.com/monea-xyz/kurtosis/cli/cli/out"
	"github.com/kurtosis-tech/stacktrace"
)

var LogoutCmd = &lowlevel.LowlevelKurtosisCommand{
	CommandStr:               command_str_consts.GitHubLogoutCmdStr,
	ShortDescription:         "Logs out a GitHub user from Kurtosis CLI",
	LongDescription:          "Logs out a GitHub user from Kurtosis CLI by removing their GitHub user info and auth token from Kurtosis CLI config",
	Args:                     nil,
	Flags:                    nil,
	PreValidationAndRunFunc:  nil,
	RunFunc:                  run,
	PostValidationAndRunFunc: nil,
}

func run(ctx context.Context, _ *flags.ParsedFlags, _ *args.ParsedArgs) error {
	githubAuthStore, err := github_auth_store.GetGitHubAuthStore()
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred retrieving GitHub auth configuration.")
	}
	username, err := githubAuthStore.GetUser()
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred getting user to see if user already exists.")
	}
	if username == "" {
		out.PrintOutLn("No GitHub user logged into Kurtosis CLI: %v")
		return nil
	}
	err = githubAuthStore.RemoveUser()
	if err != nil {
		return stacktrace.Propagate(err, "An error occurred logging out GitHub user: %v", username)
	}
	err = login.RestartEngineAfterGitHubAuth(ctx)
	if err != nil {
		return err
	}
	out.PrintOutLn(fmt.Sprintf("Successfully logged GitHub user '%v' out of Kurtosis CLI", username))
	return nil
}
