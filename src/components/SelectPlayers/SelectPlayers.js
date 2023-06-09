import Select from 'react-select';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'semantic-ui-react';

export const SelectPlayers = () => {
    const options= [
        { teamId: 1610612737, 
          abbreviation: "ATL", 
          value: "Atlanta Hawks", 
          label: "Atlanta Hawks", 
          simpleName: "Hawks",
           location: "Atlanta"
        },
        {
          teamId: 1610612738,
          abbreviation: "BOS",
          value: "Boston Celtics", 
          label: "Boston Celtics",
          simpleName: "Celtics",
          location: "Boston"
        },
        {
          teamId: 1610612751,
          abbreviation: "BKN",
          teamName: "Brooklyn Nets",
          value: "Brooklyn Nets", 
          label: "Brooklyn Nets",
          simpleName: "Nets",
          location: "Brooklyn"
        },
        {
          teamId: 1610612766,
          abbreviation: "CHA",
          value: "Charlotte Hornets", 
          label: "Charlotte Hornets",
          simpleName: "Hornets",
          location: "Charlotte"
        },
        {
          teamId: 1610612741,
          abbreviation: "CHI",
          value: "Chicago Bulls", 
          label: "Chicago Bulls",
          simpleName: "Bulls",
          location: "Chicago"
        },
        {
          teamId: 1610612739,
          abbreviation: "CLE",
          value: "Cleveland Cavaliers", 
          label: "Cleveland Cavaliers",
          simpleName: "Cavaliers",
          location: "Cleveland"
        },
        {
          teamId: 1610612742,
          abbreviation: "DAL",
          value: "Dallas Mavericks", 
          label: "Dallas Mavericks",
          simpleName: "Mavericks",
          location: "Dallas"
        },
        {
          teamId: 1610612743,
          abbreviation: "DEN",
          value: "Denver Nuggets", 
          label: "Denver Nuggets",
          simpleName: "Nuggets",
          location: "Denver"
        },
        {
          teamId: 1610612765,
          abbreviation: "DET",
          value: "Detroit Pistons", 
          label: "Detroit Pistons",
          simpleName: "Pistons",
          location: "Detroit"
        },
        {
          teamId: 1610612744,
          abbreviation: "GSW",
          value: "Golden State Warriors", 
          label: "Golden State Warriors",
          simpleName: "Warriors",
          location: "Golden State"
        },
        {
          teamId: 1610612745,
          abbreviation: "HOU",
          value: "Houston Rockets", 
          label: "Houston Rockets",
          simpleName: "Rockets",
          location: "Houston"
        },
        {
          teamId: 1610612754,
          abbreviation: "IND",
          value: "Indiana Pacers", 
          label: "Indiana Pacers",
          simpleName: "Pacers",
          location: "Indiana"
        },
        {
          teamId: 1610612746,
          abbreviation: "LAC",
          value: "Los Angeles Clippers", 
          label: "Los Angeles Clippers",
          simpleName: "Clippers",
          location: "Los Angeles"
        },
        {
          teamId: 1610612747,
          abbreviation: "LAL",
          value: "Los Angeles Lakers", 
          label: "Los Angeles Lakers",
          simpleName: "Lakers",
          location: "Los Angeles"
        },
        {
          teamId: 1610612763,
          abbreviation: "MEM",
          value: "Memphis Grizzlies", 
          label: "Memphis Grizzlies",
          simpleName: "Grizzlies",
          location: "Memphis"
        },
        {
          teamId: 1610612748,
          abbreviation: "MIA",
          value: "Miami Heat", 
          label: "Miami Heat",
          simpleName: "Heat",
          location: "Miami"
        },
        {
          teamId: 1610612749,
          abbreviation: "MIL",
          value: "Milwaukee Bucks", 
          label: "Milwaukee Bucks",
          simpleName: "Bucks",
          location: "Milwaukee"
        },
        {
          teamId: 1610612750,
          abbreviation: "MIN",
          value: "Minnesota Timberwolves", 
          label: "Minnesota Timberwolves",
          simpleName: "Timberwolves",
          location: "Minnesota"
        },
        {
          teamId: 1610612740, 
          abbreviation: "NOP",
          value: "New Orleans Pelicans", 
          label: "New Orleans Pelicans",
          simpleName: "Pelicans",
          location: "New Orleans"
        },
        {
          teamId: 1610612752,
          abbreviation: "NYK",
          value: "New York Knicks", 
          label: "New York Knicks",
          simpleName: "Knicks",
          location: "New York"
        },
        {
          teamId: 1610612760,
          abbreviation: "OKC",
          value: "Oklahoma City Thunder", 
          label: "Oklahoma City Thunder",
          simpleName: "Thunder",
          location: "Oklahoma City"
        },
        {
          teamId: 1610612753,
          abbreviation: "ORL",
          value: "Orlando Magic", 
          label: "Orlando Magic",
          simpleName: "Magic",
          location: "Orlando"
        },
        {
          teamId: 1610612755,
          abbreviation: "PHI",
          value: "Philadelphia 76ers", 
          label: "Philadelphia 76ers",
          simpleName: "76ers",
          location: "Philadelphia"
        },
        {
          teamId: 1610612756,
          abbreviation: "PHX",
          value: "Phoenix Suns", 
          label: "Phoenix Suns",
          simpleName: "Suns",
          location: "Phoenix"
        },
        {
          teamId: 1610612757,
          abbreviation: "POR",
          value: "Portland Trail Blazers", 
          label: "Portland Trail Blazers",
          simpleName: "Trail Blazers",
          location: "Portland"
        },
        {
          teamId: 1610612758,
          abbreviation: "SAC",
          value: "Sacramento Kings", 
          label: "Sacramento Kings",
          simpleName: "Kings",
          location: "Sacramento"
        },
        {
          teamId: 1610612759,
          abbreviation: "SAS",
          value: "San Antonio Spurs", 
          label: "San Antonio Spurs",
          simpleName: "Spurs",
          location: "San Antonio"
        },
        {
          teamId: 1610612761,
          abbreviation: "TOR",
          value: "Toronto Raptors", 
          label: "Toronto Raptors",
          simpleName: "Raptors",
          location: "Toronto"
        },
        {
          teamId: 1610612762,
          abbreviation: "UTA",
          value: "Utah Jazz", 
          label: "Utah Jazz",
          simpleName: "Jazz",
          location: "Utah"
        },
        {
          teamId: 1610612764,
          abbreviation: "WAS",
          value: "Washington Wizards", 
          label: "Washington Wizards",
          simpleName: "Wizards",
          location: "Washington"
        }
    
      ]
      const handleChange = (SelectedOption) => {
        setSelectedValue(SelectedOption);
      }
      const [players, setPlayers] = useState([]);
      const [selectedValue, setSelectedValue] = useState(null);
      const [selectedPlayers , setSelectedPlayers] = useState([])
    
      const handleClickPlayer = (player) => {
        setSelectedPlayers([...selectedPlayers , player])
      }
        
    useEffect(() => {
      axios.get('http://localhost:8080/secured/data',{ withCredentials: true })
        .then(response => setPlayers(response.data))
        .catch(error => console.log(error));
    }, []);
    
      const playersUI = players.map((player, index)=>{
        if(selectedValue){
          const isPlayerSelected = selectedPlayers.find((curr)=>curr.Player===player.Player);
          if(player.TmID == selectedValue.teamId && !isPlayerSelected){
            return(
              <div className='w-1/2 text-center' key={index} onClick={()=>handleClickPlayer(player)}>
                  {player.Player}               
              </div>
            )
          } 
        }
      })
    
      const selectedPlayersUI = selectedPlayers.map((player , index)=>{
            return(
             
              <div className='w-1/2 rounded-md ' key={index}>
                
               <h3 className='bg-blend-hue text-white '> {player.Player}</h3>
               <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md bg-white'>
                <thead className="text-xs text-gray-700 uppercase rounded-md bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-2 py-2">Player</th>
                    <th scope="col" class="px-2 py-2">Pos</th>
                    <th scope="col" class="px-2 py-2"> Age</th>
                    <th scope="col" class="px-2 py-2">Tm</th>
                    <th scope="col" class="px-2 py-2">G</th>
                    <th scope="col" class="px-2 py-2">GS</th>
                    <th scope="col" class="px-2 py-2">MP</th>
                    <th scope="col" class="px-2 py-2">FG</th>
                    <th scope="col" class="px-2 py-2">FGA</th>
                    <th scope="col" class="px-2 py-2">FG%</th>
                    <th scope="col" class="px-2 py-2">3P</th>
                    <th scope="col" class="px-2 py-2">3PA</th>
                    <th scope="col" class="px-2 py-2">3P%</th>
                    <th scope="col" class="px-2 py-2">2P</th>
                    <th scope="col" class="px-2 py-2">2PA</th>
                    <th scope="col" class="px-2 py-2">2P%</th>
                    <th scope="col" class="px-2 py-2">eFG%</th>
                    <th scope="col" class="px-2 py-2">FT</th>
                    <th scope="col" class="px-2 py-2">FTA</th>
                    <th scope="col" class="px-2 py-2">FT%</th>
                    <th scope="col" class="px-2 py-2">ORB</th>
                    <th scope="col" class="px-2 py-2">DRB</th>
                    <th scope="col" class="px-2 py-2">TRB</th>
                    <th scope="col" class="px-2 py-2">AST</th>
                    <th scope="col" class="px-2 py-2">STL</th>
                    <th scope="col" class="px-2 py-2">BLK</th>
                    <th scope="col" class="px-2 py-2">TOV</th>
                    <th scope="col" class="px-2 py-2">PF</th>
                    <th scope="col" class="px-2 py-2">PTS</th>
                    <th scope="col" class="px-2 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>

                    <td className="px-3 py-4">{player.Player}</td>
                    <td className="px-3 py-4">{player.Pos}</td>
                    <td className="px-3 py-4">{player.Age}</td>
                    <td className="px-3 py-4">{player.Tm}</td>
                    <td className="px-3 py-4">{player.G}</td>
                    <td className="px-3 py-4">{player.GS}</td>
                    <td className="px-3 py-4">{player.MP}</td>
                    <td className="px-3 py-4">{player.FG}</td>
                    <td className="px-3 py-4">{player.FGA}</td>
                    <td className="px-3 py-4">{player.FGP}</td>
                    <td className="px-3 py-4">{player.threeP}</td>
                    <td className="px-3 py-4">{player.threePA}</td>
                    <td className="px-3 py-4">{player.threePP}</td>
                    <td className="px-3 py-4">{player.twoP}</td>
                    <td className="px-3 py-4">{player.twoPA}</td>
                    <td className="px-3 py-4" >{player.twoPP}</td>
                    <td className="px-3 py-4">{player.EFGP}</td>
                    <td className="px-3 py-4">{player.FT}</td>
                    <td className="px-3 py-4">{player.FTA}</td>
                    <td className="px-3 py-4">{player.FTP}</td>
                    <td className="px-3 py-4">{player.ORB}</td>
                    <td className="px-3 py-4">{player.DRB}</td>
                    <td className="px-3 py-4">{player.TRB}</td>
                    <td className="px-3 py-4">{player.AST}</td>
                    <td className="px-3 py-4">{player.STL}</td>
                    <td className="px-3 py-4">{player.BLK}</td>
                    <td className="px-3 py-4">{player.TOV}</td>
                    <td className="px-3 py-4">{player.PF}</td>
                    <td className="px-3 py-4">{player.PTS}</td>
                    <td className="px-3 py-4">
                      <button className =' bg-red-600 text-black rounded-bl-lg rounded-br-lg rounded-t-lg' onClick={ () => player = null}>delete user</button>
                    </td>

                  </tr>
                </tbody>


               </table>

              </div>
            )
         
      })

      return (
        <div className='flex-auto bg-scroll' >
            <div>
            Select Team<br className=''/>
           <Select
            value={selectedValue}
            options = {options}
            onChange={handleChange}
             />
              <br />
              {/* <pre>{JSON.stringify(selectedValue, null, 2)}</pre> */}
            </div>
            <div className="flex">
              <div className="w-1/4 m-auto">
                {playersUI}
              </div >
              <div className="h-1/3  flex-grow-0" >
                {selectedPlayersUI}
              </div>                
            </div>
              
          </div>
          
          
          
        );
}