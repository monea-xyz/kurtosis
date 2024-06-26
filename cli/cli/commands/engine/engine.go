package engine

import (
	"github.com/monea-xyz/kurtosis/cli/cli/command_str_consts"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/engine/logs"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/engine/restart"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/engine/start"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/engine/status"
	"github.com/monea-xyz/kurtosis/cli/cli/commands/engine/stop"
	"github.com/spf13/cobra"
)

// EngineCmd Suppressing exhaustruct requirement because this struct has ~40 properties
// nolint: exhaustruct
var EngineCmd = &cobra.Command{
	Use:   command_str_consts.EngineCmdStr,
	Short: "Manage the Kurtosis engine server",
	RunE:  nil,
}

func init() {
	EngineCmd.AddCommand(start.StartCmd.MustGetCobraCommand())
	EngineCmd.AddCommand(status.StatusCmd)
	EngineCmd.AddCommand(stop.StopCmd)
	EngineCmd.AddCommand(restart.RestartCmd.MustGetCobraCommand())
	EngineCmd.AddCommand(logs.EngineLogsCmd.MustGetCobraCommand())
}
